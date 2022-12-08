import { AlgorithmCreateDto } from '../dto/algorithm.create.dto';
import { AlgorithmService } from '../service/algorithm.service';
export declare class AlgorithmController {
    private readonly algorithmService;
    constructor(algorithmService: AlgorithmService);
    getAllAlgorithm(): Promise<any[]>;
    createAlgorithm(data: AlgorithmCreateDto): Promise<{
        title: string;
        question: string;
        inputDesc: string;
        outputDesc: string;
        inputEx: string;
        outputEx: string;
        status: string;
        index: number;
    }>;
}
