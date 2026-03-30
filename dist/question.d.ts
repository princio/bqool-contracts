export type { Question } from "@princio/bqool";
/** Creates a new question, optionally linked to a test */
export declare namespace QuestionCreate {
    interface Request {
        name: string;
        text?: string;
        expected_answer?: string;
        test_id?: number;
    }
}
/** Updates an existing question's fields */
export declare namespace QuestionUpdate {
    interface Request {
        name?: string;
        text?: string;
        expected_answer?: string;
    }
}
