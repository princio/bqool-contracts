import type { CriterionCategory, Question } from "@princio/bqool";
export type { Question } from "@princio/bqool";
export interface QuestionSummary {
    question: Question;
    rubric: {
        concepts: {
            total: number;
            required: number;
            not_required: number;
        };
        booleanqs: {
            total: number;
            concepts: {
                required: number;
                not_required: number;
            };
        } & Record<CriterionCategory, number>;
    };
    answers: {
        total: number;
        not_typed: number;
        boolean_answers: {
            required: number;
            not_required: number;
        };
        gradeds: number;
        blanks: number;
    };
}
export interface CreateQuestionRequest {
    name: string;
    text?: string;
    expected_answer?: string;
    test_id?: number;
}
export interface UpdateQuestionRequest {
    name?: string;
    text?: string;
    expected_answer?: string;
}
