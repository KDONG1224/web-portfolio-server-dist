import { EventRepository } from '../repository/event.repository';
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: EventRepository);
    getAll(): Promise<any[]>;
    enterV2(): Promise<void>;
    playStart(eId: string, userToken: string): Promise<any>;
    playEnd(eId: string, userToken: string, coin: number, score: number, defaultScore?: number): Promise<void>;
    myRanking(eId: string, userToken: string, req: any): Promise<string | void>;
    ranking(eId: string, rank: any): Promise<any[]>;
    profile(eId: string, userToken: string, req: any): Promise<string | void>;
    buy(data: any, req: any): Promise<void>;
    select(data: any, req: any): Promise<void>;
    result(eId: string): Promise<void>;
    totalRanking(eId: string): Promise<void>;
    highRanking(eId: string): Promise<void>;
}
