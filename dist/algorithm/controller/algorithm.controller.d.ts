/// <reference types="multer" />
import { ResponseAlgorithmProps } from '../models/algorithm.model';
import { AlgorithmService } from '../service/algorithm.service';
export declare class AlgorithmController {
    private readonly algorithmService;
    constructor(algorithmService: AlgorithmService);
    getAllAlgorithm(): Promise<import("../schema/algorithm.schema").Algorithm[]>;
    getReferenceLists(filter: string): Promise<any>;
    createAlgorithm(files: Array<Express.Multer.File>, createAlgorithmData: ResponseAlgorithmProps): Promise<{
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
    updateAlgorithm(algorithmId: string, files: Array<Express.Multer.File>, datas: ResponseAlgorithmProps): Promise<{
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
