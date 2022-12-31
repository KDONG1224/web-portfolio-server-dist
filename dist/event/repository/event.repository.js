"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const moment_1 = __importDefault(require("moment"));
const mongoose_2 = require("mongoose");
const toy_projects_repository_1 = require("../../toy-projects/repository/toy-projects.repository");
const toy_projects_schema_1 = require("../../toy-projects/schema/toy-projects.schema");
const event_schema_1 = require("../schema/event.schema");
const getTransactionDay = () => {
    return new Date();
};
const getMemberNo = (phone) => {
    const year = (0, moment_1.default)(new Date()).format('YYYYMM').toString();
    const fourNumber = phone.split(':')[1].slice(7, 12);
    return year + fourNumber;
};
let EventRepository = class EventRepository {
    constructor(eventModel, toyProjectsRepository, toyProjectModel) {
        this.eventModel = eventModel;
        this.toyProjectsRepository = toyProjectsRepository;
        this.toyProjectModel = toyProjectModel;
    }
    checkEvent(eId) {
        const product = this.toyProjectModel.findById(eId);
        let _period = {};
        product
            .then((res) => {
            console.log('res : ', res);
            const startDay = res.period;
            const eventPeriod = res.eventPeriod;
            const eventStart = (0, moment_1.default)(startDay).format('YYYY-MM-DD HH:mm:ss');
            const eventEnd = (0, moment_1.default)(startDay)
                .add(eventPeriod, 'day')
                .format('YYYY-MM-DD HH:mm:ss');
            const endTime = (0, moment_1.default)(eventEnd).endOf('day');
            const today = (0, moment_1.default)();
            return (_period = {
                eventStart,
                eventEnd,
                active: today.isBetween(eventStart, endTime),
                result: res,
            });
        })
            .then((res) => console.log(res))
            .catch((err) => {
            console.error(err);
        });
        return _period;
    }
    async findAll() {
        const res = await this.eventModel.find();
        return res;
    }
    async enterV2(data) {
        return data;
    }
    async playStart(eId, userToken) {
        const userInfo = userToken.split(':')[1];
        const name = userToken.split(':')[0];
        const phone = userToken.split(':')[1];
        const memberNo = getMemberNo(userToken);
        const days = new Date();
        if (!userInfo) {
            throw new Error('no userInfo');
        }
        const res = await this.eventModel.create({
            eId,
            name,
            phone,
            memberNo,
            state: 'start',
            day: (0, moment_1.default)(days).format('YYYY-MM-DD HH:mm:ss'),
        });
        return res;
    }
    async palyEnd(eId, userToken, coin, score, defaultScore) {
        const days = getTransactionDay();
        const name = userToken.split(':')[0];
        const phone = userToken.split(':')[1];
        const memberNo = getMemberNo(userToken);
        const _defaultScore = defaultScore ? defaultScore : 400;
        if (!userToken) {
            throw new Error('no userToken');
        }
        const checkEventDate = await this.toyProjectsRepository.checkEvent(eId);
        try {
            if (!checkEventDate || checkEventDate.active !== true) {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: '이벤트가 존재하지 않습니다.',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
            let myScore = Number(score);
            let totalCoin = 0;
            let resultTotalScore = 0;
            let resultHighScore = 0;
            let createUser;
            let eventActive = checkEventDate.active;
            this.eventModel
                .aggregate([
                {
                    $match: {
                        state: 'normal',
                        memberNo: memberNo,
                        eId: eId,
                    },
                },
                {
                    $group: {
                        _id: '$memberNo',
                        totalScore: {
                            $sum: {
                                $toDouble: '$score',
                            },
                        },
                        highScore: {
                            $max: {
                                $toDouble: '$score',
                            },
                        },
                    },
                },
                { $sort: { score: -1 } },
            ])
                .then((userInfo) => {
                let totalScore = userInfo.length ? userInfo[0].totalScore : 0;
                let highScore = userInfo.length ? userInfo[0].highScore : 0;
                resultTotalScore = totalScore ? totalScore + myScore : myScore;
                resultHighScore =
                    highScore && highScore > myScore ? highScore : myScore;
                return this.eventModel.findOne({
                    where: {
                        eId,
                        memberNo,
                        state: 'start',
                    },
                    order: 'created DESC',
                });
            })
                .then((e) => {
                let time = Math.floor(Math.abs(new Date().getTime() - e.createdAt.getTime()) / 1000);
                let getMaxScore = time * _defaultScore;
                if (defaultScore === 0 || getMaxScore > score) {
                    return this.eventModel.updateOne({
                        id: e.id,
                    }, {
                        score,
                        totalScore: resultTotalScore,
                        highScore: resultHighScore,
                        state: 'normal',
                        day: (0, moment_1.default)(days).format('YYYY-MM-DD HH:mm:ss'),
                    });
                }
                else {
                    throw new Error('비정상적 점수입니다.');
                }
            })
                .then((createUserData) => {
                console.log('createUserData : ', createUserData);
                createUser = createUserData;
                const exists = this.eventModel
                    .findOne({
                    memberNo: memberNo,
                    state: 'score',
                    eId: eId,
                })
                    .exec();
                console.log('exists : ', exists);
                if (!exists) {
                    return this.eventModel.create({
                        eId,
                        name,
                        phone,
                        memberNo,
                        totalScore: resultTotalScore,
                        highScore: resultHighScore,
                        state: 'score',
                        day: (0, moment_1.default)(days).format('YYYY-MM-DD HH:mm:ss'),
                    });
                }
                else {
                }
            })
                .then(() => {
                return this.eventModel
                    .find({
                    where: {
                        memberNo: memberNo,
                        state: 'profile',
                        eId: eId,
                    },
                })
                    .then((profileUserInfo) => {
                    if (profileUserInfo.length) {
                        totalCoin =
                            Number(profileUserInfo[0].coin) + Number(coin ? coin : '');
                        const exists = this.eventModel.exists({
                            memberNo: memberNo,
                            state: 'profile',
                            eId: eId,
                        });
                        if (!exists) {
                            return this.eventModel.create({
                                eId,
                                name,
                                phone,
                                memberNo,
                                coin: totalCoin,
                                state: 'profile',
                                day: (0, moment_1.default)(days).format('YYYY-MM-DD HH:mm:ss'),
                            });
                        }
                        else {
                            return exists.update({
                                eId,
                                name,
                                phone,
                                memberNo,
                                coin: totalCoin,
                                state: 'profile',
                                day: (0, moment_1.default)(days).format('YYYY-MM-DD HH:mm:ss'),
                            });
                        }
                    }
                    else {
                        return this.eventModel.create({
                            eId,
                            name,
                            phone,
                            memberNo,
                            score,
                            coin,
                            selectChar: 'char0',
                            charList: ['1', '0', '0', '0', '0'],
                            state: 'profile',
                            day: (0, moment_1.default)(days).format('YYYY-MM-DD HH:mm:ss'),
                        });
                    }
                });
            })
                .then(() => {
                console.log('end', new Date());
                return;
            })
                .catch((error) => {
                console.error(error);
                return;
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async myRanking(eId, userToken, req) {
        console.log('== eId == : ', eId);
        console.log('== userToken == : ', userToken);
        let noTokenName = '';
        let noTokenPhone = '';
        noTokenName = userToken.split(':')[0];
        noTokenPhone = userToken.split(':')[1];
        const userInfo = req.result ? req.result.memberNo : noTokenPhone;
        const name = req.result ? req.result.name : noTokenName;
        const phone = req.result ? req.result.phone : noTokenPhone;
        const memberNo = getMemberNo(userToken);
        let eventActive = '';
        if (!userInfo) {
            throw new Error('no token');
        }
        const checkEventDate = await this.toyProjectsRepository.checkEvent(eId);
        try {
            if (!checkEventDate || checkEventDate.active !== true) {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: '이벤트가 존재하지 않습니다.',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
            let resultData;
            eventActive = checkEventDate.active;
            const result = await this.eventModel
                .findOne({
                name,
                phone,
                state: 'score',
                eId,
            })
                .then((UserInfo) => {
                if (eId !== '6372f72ef67734db2bbb2716') {
                    if (UserInfo) {
                        resultData =
                            '|' +
                                UserInfo.name.replace(/(?<=.{1})./gi, '*') +
                                '|' +
                                UserInfo.phone +
                                '|' +
                                UserInfo.memberNo +
                                '|' +
                                UserInfo.totalScore +
                                '|' +
                                UserInfo.highScore +
                                '|' +
                                UserInfo.totalRank +
                                '|' +
                                UserInfo.highRank +
                                '등' +
                                '|';
                    }
                    else {
                        resultData =
                            '|' +
                                name.replace(/(?<=.{1})./gi, '*') +
                                '|' +
                                phone +
                                '|' +
                                memberNo +
                                '|' +
                                '0' +
                                '|' +
                                '0' +
                                '|' +
                                '0' +
                                '|' +
                                '0등' +
                                '|';
                    }
                }
                else {
                    if (UserInfo) {
                        resultData =
                            '|' +
                                UserInfo.name.replace(/(?<=.{1})./gi, '*') +
                                '|' +
                                UserInfo.phone +
                                '|' +
                                UserInfo.memberNo +
                                '|' +
                                UserInfo.totalScore +
                                '|' +
                                UserInfo.highScore +
                                '|' +
                                UserInfo.totalRank +
                                '|' +
                                UserInfo.highRank +
                                '|';
                    }
                    else {
                        resultData =
                            '|' +
                                name.replace(/(?<=.{1})./gi, '*') +
                                '|' +
                                phone +
                                '|' +
                                memberNo +
                                '|' +
                                '0' +
                                '|' +
                                '0' +
                                '|' +
                                '0' +
                                '|' +
                                '0' +
                                '|';
                    }
                }
                return this.eventModel.findOne({
                    state: 'score',
                    eId: eId,
                    order: 'totalScore DESC',
                });
            })
                .then((totalUserInfo) => {
                if (totalUserInfo) {
                    resultData = resultData + totalUserInfo.totalScore;
                }
                else {
                    resultData = resultData + '0';
                }
                return this.eventModel.findOne({
                    state: 'score',
                    eId: eId,
                    order: 'highScore DESC',
                });
            })
                .then((highUserInfo) => {
                if (highUserInfo) {
                    resultData = resultData + '|' + highUserInfo.highScore + '|';
                }
                else {
                    resultData = resultData + '|' + '0' + '|';
                }
                return resultData + eventActive + '|';
            })
                .then((myRank) => {
                return myRank;
            })
                .catch((error) => {
                return console.error(error);
            });
            return result;
        }
        catch (err) {
            console.error(err);
        }
    }
    async ranking(eId, rank) {
        const rankData = await this.eventModel.find({ eId, state: 'rankData' });
        return rankData;
    }
    async profile(eId, userToken, req) {
        const checkEventDate = await this.toyProjectsRepository.checkEvent(eId);
        const memberNo = getMemberNo(userToken);
        const eventActive = checkEventDate.active;
        if (!userToken) {
            throw new Error('no token');
        }
        try {
            if (!checkEventDate || !eventActive) {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: '이벤트가 존재하지 않습니다.',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
            const result = await this.eventModel
                .find({ memberNo: memberNo, state: 'profile', eId: eId })
                .then((userProfile) => {
                if (!userProfile.length) {
                    const result = '|' +
                        0 +
                        '|' +
                        'char0' +
                        '|' +
                        '1' +
                        '|' +
                        '0' +
                        '|' +
                        '0' +
                        '|' +
                        '0' +
                        '|' +
                        '0' +
                        '|';
                    return result;
                }
                else {
                    const result = '|' +
                        userProfile[0].coin +
                        '|' +
                        userProfile[0].selectChar +
                        '|' +
                        userProfile[0].charList[0] +
                        '|' +
                        userProfile[0].charList[1] +
                        '|' +
                        userProfile[0].charList[2] +
                        '|' +
                        userProfile[0].charList[3] +
                        '|' +
                        userProfile[0].charList[4] +
                        '|';
                    return result;
                }
            })
                .catch((error) => {
                return console.error(error);
            });
            return result;
        }
        catch (err) {
            console.error(err);
        }
    }
    async buy(data, req) {
        const { eId, char, userToken } = data;
        const checkEventDate = await this.toyProjectsRepository.checkEvent(eId);
        const memberNo = req.result.memberNo;
        if (!userToken) {
            return console.error('no token');
        }
        let useCoin = 0;
        checkEventDate
            .then((eventDate) => {
            if (!eventDate.active) {
                throw new Error('no event');
            }
            else {
                if (String(char) === '1') {
                    useCoin = 300;
                }
                else if (String(char) === '2') {
                    useCoin = 300;
                }
                else if (String(char) === '3') {
                    useCoin = 500;
                }
                else if (String(char) === '4') {
                    useCoin = 500;
                }
                else {
                    throw new Error('no char');
                }
                return this.eventModel.find({
                    where: {
                        memberNo: memberNo,
                        state: 'profile',
                        eId: eId,
                    },
                });
            }
        })
            .then((userProfile) => {
            if (Number(userProfile[0].charList[char])) {
                throw new Error('already char');
            }
            else {
                return {
                    coin: userProfile[0].coin,
                    charList: userProfile[0].charList,
                };
            }
        })
            .then((myProfile) => {
            if (myProfile.coin < useCoin) {
                throw new Error('no money');
            }
            else {
                const totalCoin = Number(myProfile.coin) - useCoin;
                const charListArray = myProfile.charList.map((charList, idx) => {
                    if (Number(idx) === Number(char)) {
                        return '1';
                    }
                    else {
                        return charList;
                    }
                });
                const exists = this.eventModel.exists({
                    memberNo: memberNo,
                    state: 'profile',
                    eId: eId,
                });
                if (!exists) {
                    return this.eventModel.create({
                        coin: totalCoin,
                        charList: charListArray,
                    });
                }
                else {
                    return this.eventModel.updateOne({
                        coin: totalCoin,
                        charList: charListArray,
                    });
                }
            }
        })
            .then(() => {
            return 'buy';
        })
            .catch((error) => {
            return console.error(error);
        });
    }
    async select(data, req) {
        const { eId, char, userToken } = data;
        const checkEventDate = await this.toyProjectsRepository.find({
            _id: eId,
        });
        const memberNo = req.result.memberNo;
        if (!userToken) {
            return;
        }
        checkEventDate
            .then((eventDate) => {
            if (!eventDate.active) {
                throw new Error('no event');
            }
            else {
                return this.eventModel.find({
                    where: {
                        memberNo: memberNo,
                        state: 'profile',
                        eId: eId,
                    },
                });
            }
        })
            .then((userProfile) => {
            if (Number(userProfile[0].charList[char])) {
                const exists = this.eventModel.exists({
                    memberNo: memberNo,
                    state: 'profile',
                    eId: eId,
                });
                if (!exists) {
                    return this.eventModel.create({
                        selectChar: 'char' + char,
                    });
                }
                else {
                    return this.eventModel.updateOne({
                        selectChar: 'char' + char,
                    });
                }
            }
            else {
                throw new Error('no buy char');
            }
        })
            .then(() => {
            const res = 'char' + char;
            return res;
        })
            .catch((error) => {
            console.error(error);
            return;
        });
    }
    async result(eId) {
        const res = this.eventModel.find({ eId, state: 'resultData' });
        res
            .then((res) => {
            if (!res[0]['result'])
                throw new Error('no Result');
            let result = res[0]['result'];
            return result;
        })
            .catch((error) => {
            console.error(error);
            return;
        });
    }
    async totalRanking(eId) {
        const checkEventDate = await this.toyProjectsRepository.find({
            _id: eId,
        });
        checkEventDate
            .then((eventDate) => {
            if (!eventDate.active) {
                console.error('no event');
                return;
            }
            const result = this.eventModel.findOne({ eId, state: 'rankData' });
            return result;
        })
            .then((res) => {
            let totalRank = res.totalRank;
            const result = totalRank.toString().replace(/,/g, '@');
            return result;
        });
    }
    async highRanking(eId) {
        const checkEventDate = await this.toyProjectsRepository.find({
            _id: eId,
        });
        checkEventDate
            .then((eventDate) => {
            if (!eventDate.active) {
                console.error('no event');
                return;
            }
            const result = this.eventModel.findOne({ eId, state: 'rankData' });
            return result;
        })
            .then((res) => {
            let highRank = res.highRank;
            const result = highRank.toString().replace(/,/g, '@');
            return result;
        });
    }
};
EventRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.Events.name)),
    __param(2, (0, mongoose_1.InjectModel)(toy_projects_schema_1.ToyProjects.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        toy_projects_repository_1.ToyProjectsRepository,
        mongoose_2.Model])
], EventRepository);
exports.EventRepository = EventRepository;
//# sourceMappingURL=event.repository.js.map