/// <reference types="multer" />
import { FilterQuery } from 'mongoose';
import { ResponseReferenceProps } from '../models/reference.model';
import { ReferenceRepository } from '../repository/reference.repository';
import { Reference } from '../schema/reference.schema';
export declare class ReferenceService {
    private readonly referenceRepository;
    constructor(referenceRepository: ReferenceRepository);
    getAllReference(): Promise<Reference[]>;
    getReferenceLists(filter: FilterQuery<Reference>): Promise<any>;
    createReference(createReferenceData: ResponseReferenceProps, files: Array<Express.Multer.File>): Promise<{
        title: string;
        type: string;
        tag: string;
        use: number;
        definition: string[];
        element: string;
        summary: string;
        description: string;
        accessibility: string[];
        reference: import("../models/reference.model").ReferenceModel[];
        compatibility: import("../models/reference.model").CompatibilityModel[];
        thumbmnaile: string;
        status: string;
        index: number;
        id: string;
    }>;
    updateReference(id: string, files: Array<Express.Multer.File>, datas: ResponseReferenceProps): Promise<{
        title: string;
        type: string;
        tag: string;
        use: number;
        definition: string[];
        element: string;
        summary: string;
        description: string;
        accessibility: string[];
        reference: import("../models/reference.model").ReferenceModel[];
        compatibility: import("../models/reference.model").CompatibilityModel[];
        thumbmnaile: string;
        status: string;
        index: number;
        id: string;
    }>;
}
