/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { CompatibilityModel, ReferenceModel } from '../models/reference.model';
export declare class Reference extends Document {
    title: string;
    type: string;
    tag: string;
    use: number;
    definition: string[];
    element: string;
    reference: ReferenceModel[];
    summary: string;
    description: string;
    accessibility?: string[];
    compatibility: CompatibilityModel[];
    thumbmnaile: string;
    index: number;
    status: string;
    readonly readOnlyData: {
        title: string;
        type: string;
        tag: string;
        use: number;
        definition: string[];
        element: string;
        summary: string;
        description: string;
        accessibility: string[];
        reference: ReferenceModel[];
        compatibility: CompatibilityModel[];
        thumbmnaile: string;
        status: string;
        index: number;
        id: string;
    };
}
export declare const ReferenceSchema: import("mongoose").Schema<Reference, import("mongoose").Model<Reference, any, any, any, any>, {}, {}, {}, {}, "type", Reference>;
