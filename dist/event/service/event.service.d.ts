import { EventRepository } from '../repository/event.repository';
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: EventRepository);
    getAll(): Promise<any[]>;
    enterV2(): Promise<void>;
    playStart(eId: string, req: any): Promise<any>;
    playEnd(data: any): Promise<void>;
    myRanking(eId: string, userToken: string, req: any): Promise<void>;
    ranking(eId: string, rank: any): Promise<any[]>;
    profile(eId: string, userToken: string, req: any): Promise<void>;
    buy(data: any, req: any): Promise<void>;
    select(data: any, req: any): Promise<void>;
    result(eId: string): Promise<void>;
    totalRanking(eId: string): Promise<void>;
    highRanking(eId: string): Promise<void>;
}
