import type { BooleanAnswer, Criterion, CriterionCategory } from "@princio/bqool";
/** Concept enriched with derived evaluation state from BooleanAnswers */
export interface AnswerCriterion extends Criterion {
    booleanq_answers: BooleanAnswer[];
}
export interface Response_InitAnswer {
    ok: boolean;
    created: {
        criteria: number;
        boolean_answers: number;
    };
}
export type PenmarkCategory = Exclude<CriterionCategory, "concept">;
export interface Response_CreatePenmark {
    ok: boolean;
    id: number;
    category: PenmarkCategory;
}
/** Response for toggling answer protection */
export interface Response_ToggleProtection {
    ok: boolean;
    protected: number;
}
/** Response for batch answer creation */
export interface Response_BatchCreate {
    ok: boolean;
    created: number;
}
/** Response for batch answer reset */
export interface Response_BatchReset {
    ok: boolean;
    reset: number;
}
/** Response for workdir status check */
export interface Response_WorkdirStatus {
    workdir_mtime: string | null;
    output_mtime: string | null;
}
/** Response for workdir recreation */
export interface Response_RecreateWorkdir {
    ok: boolean;
    workdir: string;
}
export interface UpdateAnswerRequest {
    text?: string;
    blank?: boolean;
}
export interface SetGradeRequest {
    grade: number;
}
export interface SetBonusRequest {
    bonus: number | null;
}
export interface UpsertBooleanQAnswerRequest {
    answer?: boolean;
    citations?: string[];
    rationale?: string;
}
