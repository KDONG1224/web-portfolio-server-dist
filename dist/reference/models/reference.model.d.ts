export declare class ReferenceModel {
    title: string;
    url: string;
}
export declare class CompatibilityModel {
    name: string;
    isUse: boolean;
}
export declare class ReferenceImageModel {
    uid: string;
    lastModified: number;
    lastModifiedDate: any;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}
export interface ResponseReferenceProps {
    accessibility: string;
    compatibility: string;
    definition: string;
    description: string;
    element: string;
    reference: string;
    summary: string;
    tag: string;
    title: string;
    type: 'html' | 'css' | 'javascript';
    use: string;
    thumbmnaile: string;
}
