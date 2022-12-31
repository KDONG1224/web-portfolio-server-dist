import { EventService } from '../service/event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    getAllEvent(): Promise<any[]>;
    enterV2(): Promise<void>;
    playStart(playStartData: {
        eId: string;
        userToken: string;
    }): Promise<any>;
    playEnd(playEndData: {
        eId: string;
        userToken: string;
        coin: number;
        score: number;
        defaultScore?: number;
    }): Promise<void>;
    myRanking(eId: string, userToken: string, req: Request): Promise<string | void>;
    ranking(eId: string, rank: any): Promise<any[]>;
    profile(eId: string, userToken: string, req: Request): Promise<string | void>;
    buy(eId: string, char: any, userToken: any, req: any): Promise<void>;
    select(eId: string, char: any, userToken: any, req: any): Promise<void>;
    result(eId: string): Promise<void>;
    totalRanking(eId: string): Promise<void>;
    highRanking(eId: string): Promise<void>;
}
