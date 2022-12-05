/// <reference types="multer" />
import { ResponseReferenceProps } from '../models/reference.model';
import { Reference } from '../schema/reference.schema';
import { ReferenceService } from '../service/reference.service';
export declare class ReferenceController {
    private readonly referenceService;
    constructor(referenceService: ReferenceService);
    getAllReference(): Promise<Reference[]>;
    getReferenceLists(filter: string): Promise<any>;
    createReference(files: Array<Express.Multer.File>, createReferenceData: ResponseReferenceProps): Promise<{
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
    updateReference(referenceId: string, files: Array<Express.Multer.File>, datas: ResponseReferenceProps): Promise<{
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
