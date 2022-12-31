import { Model } from 'mongoose';
import { ToyProjectsRepository } from 'src/toy-projects/repository/toy-projects.repository';
import { EnterV2Props } from '../models/event.model';
export declare class EventRepository {
    private readonly eventModel;
    private readonly toyProjectsRepository;
    private readonly toyProjectModel;
    constructor(eventModel: Model<any>, toyProjectsRepository: ToyProjectsRepository, toyProjectModel: Model<any>);
    checkEvent(eId: string): any;
    findAll(): Promise<any[]>;
    enterV2(data: EnterV2Props): Promise<any>;
    playStart(eId: string, userToken: string): Promise<any>;
    palyEnd(eId: string, userToken: string, coin: number, score: number, defaultScore?: number): Promise<void>;
    myRanking(eId: string, userToken: string, req: any): Promise<string | void>;
    ranking(eId: string, rank: any): Promise<any[]>;
    profile(eId: string, userToken: string, req: any): Promise<string | void>;
    buy(data: any, req: any): Promise<void>;
    select(data: any, req: any): Promise<void>;
    result(eId: string): Promise<void>;
    totalRanking(eId: string): Promise<void>;
    highRanking(eId: string): Promise<void>;
}
