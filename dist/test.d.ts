import type { Question } from "./question";
/** Minimal test reference */
export interface TestRef {
    id: number;
    name: string;
}
export interface TestListItem {
    id: number;
    name: string;
    classroom_name: string;
    classroom_id: number;
}
/** Test entry in question listings */
export interface TestQuestionLink {
    id: number;
    name: string;
    classroom_name: string;
    question_id: number;
}
/** Question shape inside TestDetail */
export interface TestDetailQuestion extends Pick<Question, "id" | "name"> {
    number: number | null;
    text: string;
    expected_answer: string;
    rubric_count: number;
    nr_rubric_count: number;
    expression_count: number;
    code_count: number;
    error_count: number;
}
export interface TestRisultatiData {
    test: {
        id: number;
        name: string;
    };
    questions: {
        id: number;
        name: string;
        number: number | null;
    }[];
    students: {
        id: number;
        name: string;
        final_grade: number | null;
        scores: Record<number, {
            grade: number | null;
            grade_bonus: number | null;
            isblank: boolean;
            word_count: number;
            status: "blank" | "filled" | "to_fill";
            booleanq_yes?: number;
        }>;
    }[];
}
/** Creates a new test in a classroom */
export declare namespace TestCreate {
    interface Request {
        class_id: number;
        name: string;
    }
}
/** Updates test fields */
export declare namespace TestUpdate {
    interface Request {
        name: string;
    }
}
/** Adds a question to a test */
export declare namespace TestQuestionAdd {
    interface Request {
        root_question_id: number;
        copy_baseline?: boolean;
    }
}
/** Updates the question number within a test */
export declare namespace TestQuestionNumberUpdate {
    interface Request {
        number: number | null;
    }
}
