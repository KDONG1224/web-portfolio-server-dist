/// <reference types="multer" />
import { FilterQuery, Model } from 'mongoose';
import { AwsUploadService } from 'src/aws-upload/service/aws-upload.service';
import { ResponseAlgorithmProps } from '../models/algorithm.model';
import { Algorithm } from '../schema/algorithm.schema';
export declare class AlgorithmRepository {
    private readonly algorithmMoel;
    private readonly awsUploadService;
    constructor(algorithmMoel: Model<Algorithm>, awsUploadService: AwsUploadService);
    findAll(): Promise<Algorithm[]>;
    find(filter: FilterQuery<Algorithm>): Promise<any>;
    create(datas: ResponseAlgorithmProps, files: Array<Express.Multer.File>): Promise<Algorithm>;
    update(id: string, files: Array<Express.Multer.File>, datas: ResponseAlgorithmProps): Promise<Algorithm>;
}
