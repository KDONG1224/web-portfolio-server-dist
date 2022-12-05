import { Model } from 'mongoose';
import { AlgorithmCreateDto } from '../dto/algorithm.create.dto';
import { Algorithm } from '../schema/algorithm.schema';
export declare class AlgorithmRepository {
    private readonly algorithmMoel;
    constructor(algorithmMoel: Model<Algorithm>);
    findAll(): Promise<Algorithm[]>;
    create(algorithm: AlgorithmCreateDto): Promise<Algorithm>;
}
