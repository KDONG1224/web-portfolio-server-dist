/// <reference types="multer" />
import { FilterQuery } from 'mongoose';
import { ResponseAlgorithmProps } from '../models/algorithm.model';
import { AlgorithmRepository } from '../repository/algorithm.repository';
import { Algorithm } from '../schema/algorithm.schema';
export declare class AlgorithmService {
    private readonly algorithmRepository;
    constructor(algorithmRepository: AlgorithmRepository);
    getAllAlgorithm(): Promise<Algorithm[]>;
    getAlgorithmLists(filter: FilterQuery<Algorithm>): Promise<any>;
    createAlgorithm(data: ResponseAlgorithmProps, files: Array<Express.Multer.File>): Promise<{
        title: string;
        question: string;
        hint: string;
        type: string;
        level: number;
        grassMyDesc: string;
        grassDifferDesc: string;
        grassMyCode: string;
        grassDifferCode: string;
        thumbmnaile: string;
        status: string;
        index: number;
        id: string;
        createdAt: Date;
    }>;
    updateAlgorithm(id: string, files: Array<Express.Multer.File>, datas: ResponseAlgorithmProps): Promise<{
        title: string;
        question: string;
        hint: string;
        type: string;
        level: number;
        grassMyDesc: string;
        grassDifferDesc: string;
        grassMyCode: string;
        grassDifferCode: string;
        thumbmnaile: string;
        status: string;
        index: number;
        id: string;
        createdAt: Date;
    }>;
}
