import type { Classroom, CriterionCategory, GradeParams, Question, Test } from "@princio/bqool";
export type { Question } from "@princio/bqool";
export interface QuestionDetail {
    question: Question;
    tests: (Test & {
        classroom: Classroom;
    })[];
    booleanq_count: number;
    criteria_count: Record<CriterionCategory, number>;
    criteria_notrequired_count: Record<CriterionCategory, number>;
    answers: {
        blank: number;
        not_typed: number;
    };
}
/** Lists all questions */
/** GET /questions */
export declare namespace QuestionList {
    interface Response {
        questions: QuestionDetail[];
    }
}
/** Gets a single question detail */
/** GET /questions/:id */
export declare namespace QuestionGetDetail {
    type Response = QuestionDetail;
}
/** Creates a new question, optionally linked to a test */
/** POST /questions?test_id=:testId */
export declare namespace QuestionCreate {
    type Request = Partial<Omit<Question, "id">>;
}
/** Updates an existing question's fields */
/** PUT /questions/:id */
export declare namespace QuestionUpdate {
    type Request = Partial<Omit<Question, "id">>;
}
/** Gets the grade parameters for a question */
/** GET /questions/:id/grade-params */
export declare namespace QuestionGetGradeParams {
    type Response = GradeParams | null;
}
/** Updates the grade parameters for a question */
/** PUT /questions/:id/grade-params */
export declare namespace QuestionSetGradeParams {
    interface Request {
        params_json: string;
    }
}
