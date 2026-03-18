import type { BooleanQ, Concept, Criterion } from "@princio/bqool";
export type { BooleanAnswer, BooleanQ, Concept, Criterion, } from "@princio/bqool";
export interface RubricExportData {
    question_id: string;
    concepts: (Concept & {
        booleanqs: BooleanQ[];
    })[];
    criteria: (Criterion & {
        booleanqs: BooleanQ[];
    })[];
    students: string[];
    answers: Record<string, string>;
}
export interface CreateRubricConceptRequest {
    name: string;
    definition: string;
}
export interface CreateBooleanQRequest {
    criterion_type: string;
    criterion_id: number;
    text: string;
}
export interface UpdateBooleanQRequest {
    text?: string;
}
export interface CreateExpressionRequest {
    name: string;
    type: string;
}
export interface CreateCodeRequest {
    expression: string;
    type: string;
}
export interface CreateErrorRequest {
    name: string;
    description: string;
}
export interface UpdateCriterionFieldRequest {
    field: string;
    value: string | number;
}
/** Generic criterion creation (covers expression, code, error) */
export interface CreateCriterionRequest {
    name?: string;
    expression?: string;
    severity?: number;
    definition?: string;
    description?: string;
}
