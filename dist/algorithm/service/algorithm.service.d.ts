import { AlgorithmCreateDto } from '../dto/algorithm.create.dto';
import { AlgorithmRepository } from '../repository/algorithm.repository';
export declare class AlgorithmService {
    private readonly algorithmRepository;
    constructor(algorithmRepository: AlgorithmRepository);
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
