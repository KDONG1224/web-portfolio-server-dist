/// <reference types="multer" />
import { ResponseGuestbookProps } from '../models/guestbook.model';
import { GuestbookService } from '../service/guestbook.service';
export declare class GuestbookController {
    private readonly guestbookService;
    constructor(guestbookService: GuestbookService);
    getAllGuestbook(): Promise<import("../schema/guestbook.schema").Guestbook[]>;
    getGuestbook(filter: string): void;
    createReference(files: Array<Express.Multer.File>, guestbookData: ResponseGuestbookProps): Promise<{
        name: string;
        content: string;
        email: string;
        images: string;
        status: string;
        id: string;
        createdAt: string;
    }>;
}
