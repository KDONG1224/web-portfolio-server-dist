"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPicks = exports.gawibawibo = exports.randomString = void 0;
const crypto = __importStar(require("crypto"));
const moment_1 = __importDefault(require("moment"));
const randomString = (length, chars) => {
    let mask = '';
    if (chars.indexOf('a') > -1)
        mask += 'abcdefghijklmnopqrstuvwxy';
    if (chars.indexOf('A') > -1)
        mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1)
        mask += '0123456789';
    if (chars.indexOf('!') > -1)
        mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    let result = '';
    for (let i = length; i > 0; --i)
        result += mask[Math.floor(Math.random() * mask.length)];
    return result;
};
exports.randomString = randomString;
const gawibawibo = (userChoice) => {
    const result = {};
    const saveMomChoice = crypto.randomInt(1, 4);
    if (userChoice == saveMomChoice) {
        result['playResult'] = 'draw';
    }
    else if (userChoice == 1 && saveMomChoice == 2) {
        result['playResult'] = 'defeat';
    }
    else if (userChoice == 1 && saveMomChoice == 3) {
        result['playResult'] = 'win';
    }
    else if (userChoice == 2 && saveMomChoice == 1) {
        result['playResult'] = 'win';
    }
    else if (userChoice == 2 && saveMomChoice == 3) {
        result['playResult'] = 'defeat';
    }
    else if (userChoice == 3 && saveMomChoice == 1) {
        result['playResult'] = 'defeat';
    }
    else if (userChoice == 3 && saveMomChoice == 2) {
        result['playResult'] = 'win';
    }
    else {
        result['playResult'] = null;
    }
    result['saveMomChoice'] = saveMomChoice;
    result['userChoice'] = userChoice;
    return result;
};
exports.gawibawibo = gawibawibo;
const userPicks = (user) => {
    const userPicks = {};
    user.map((pickNum) => {
        const joinDay = (0, moment_1.default)(pickNum.day).format('YYYYMMDD');
        if (pickNum.playResult) {
            if (userPicks[joinDay]) {
                userPicks[joinDay]['result'] = [
                    ...userPicks[joinDay]['result'],
                    pickNum.playResult,
                ];
            }
            else {
                userPicks[joinDay] = {};
                userPicks[joinDay]['result'] = [pickNum.playResult];
            }
        }
    });
    return userPicks;
};
exports.userPicks = userPicks;
//# sourceMappingURL=utils.js.map