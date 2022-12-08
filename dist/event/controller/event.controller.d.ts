import { EventService } from '../service/event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    getAllEvent(): Promise<any[]>;
    enterV2(): Promise<void>;
    playStart(eId: string, req: any): Promise<any>;
    playEnd(eId: string, score: string, coin: any, userToken: string, defaultScore: any, req: any): Promise<void>;
    myRanking(eId: string, userToken: string, req: any): Promise<void>;
    ranking(eId: string, rank: any): Promise<any[]>;
    profile(eId: string, userToken: string, req: any): Promise<void>;
    buy(eId: string, char: any, userToken: any, req: any): Promise<void>;
    select(eId: string, char: any, userToken: any, req: any): Promise<void>;
    result(eId: string): Promise<void>;
    totalRanking(eId: string): Promise<void>;
    highRanking(eId: string): Promise<void>;
}
