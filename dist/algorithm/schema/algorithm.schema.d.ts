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
export declare class Algorithm extends Document {
    title: string;
    question: string;
    hint: string;
    level: string;
    type: string;
    grassMyDesc: string;
    grassDifferDesc: string;
    grassMyCode: string;
    grassDifferCode: string;
    thumbmnaile: string;
    index: number;
    status: string;
    readonly readOnlyData: {
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
    };
}
export declare const AlgorithmSchema: import("mongoose").Schema<Algorithm, import("mongoose").Model<Algorithm, any, any, any, any>, {}, {}, {}, {}, "type", Algorithm>;
