import { Model } from 'mongoose';
import { ToyProjectsRepository } from 'src/toy-projects/repository/toy-projects.repository';
import { EnterV2Props } from '../models/event.model';
export declare class EventRepository {
    private readonly eventModel;
    private readonly toyProjectsRepository;
    constructor(eventModel: Model<any>, toyProjectsRepository: ToyProjectsRepository);
    checkEvent(eId: string): Promise<void>;
    findAll(): Promise<any[]>;
    enterV2(data: EnterV2Props): Promise<any>;
    playStart(eId: string, req: any): Promise<any>;
    palyEnd(data: any): Promise<void>;
    myRanking(eId: string, userToken: string, req: any): Promise<void>;
    ranking(eId: string, rank: any): Promise<any[]>;
    profile(eId: string, userToken: string, req: any): Promise<void>;
    buy(data: any, req: any): Promise<void>;
    select(data: any, req: any): Promise<void>;
    result(eId: string): Promise<void>;
    totalRanking(eId: string): Promise<void>;
    highRanking(eId: string): Promise<void>;
}
