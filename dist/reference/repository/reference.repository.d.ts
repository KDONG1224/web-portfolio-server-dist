/// <reference types="multer" />
import { FilterQuery, Model } from 'mongoose';
import { AwsUploadService } from 'src/aws-upload/service/aws-upload.service';
import { ResponseReferenceProps } from '../models/reference.model';
import { Reference } from '../schema/reference.schema';
export declare class ReferenceRepository {
    private readonly referenceModel;
    private readonly awsUploadService;
    constructor(referenceModel: Model<Reference>, awsUploadService: AwsUploadService);
    findAll(): Promise<Reference[]>;
    create(createReferenceData: ResponseReferenceProps, files: Array<Express.Multer.File>): Promise<Reference>;
    find(filter: FilterQuery<Reference>): Promise<any>;
    update(id: string, files: Array<Express.Multer.File>, datas: ResponseReferenceProps): Promise<Reference>;
}
