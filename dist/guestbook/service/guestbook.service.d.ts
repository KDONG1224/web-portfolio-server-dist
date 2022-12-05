/// <reference types="multer" />
import { ResponseGuestbookProps } from '../models/guestbook.model';
import { GuestbookRepository } from '../repository/guestbook.repository';
export declare class GuestbookService {
    private readonly guestbookRepository;
    constructor(guestbookRepository: GuestbookRepository);
    getAllGuestbook(): Promise<import("../schema/guestbook.schema").Guestbook[]>;
    createGuestbook(guestbookData: ResponseGuestbookProps, files: Array<Express.Multer.File>): Promise<{
        name: string;
        content: string;
        email: string;
        images: string;
        status: string;
        id: string;
        createdAt: string;
    }>;
}
