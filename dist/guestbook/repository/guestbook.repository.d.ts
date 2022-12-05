/// <reference types="multer" />
import { Model } from 'mongoose';
import { AwsUploadService } from 'src/aws-upload/service/aws-upload.service';
import { ResponseGuestbookProps } from '../models/guestbook.model';
import { Guestbook } from '../schema/guestbook.schema';
export declare class GuestbookRepository {
    private readonly guestbookModel;
    private readonly awsUploadService;
    constructor(guestbookModel: Model<Guestbook>, awsUploadService: AwsUploadService);
    findAll(): Promise<Guestbook[]>;
    create(guestbookData: ResponseGuestbookProps, files: Array<Express.Multer.File>): Promise<Guestbook>;
}
