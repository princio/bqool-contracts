import type { Answer, Classroom, CriterionCategory, Question, Student, Test } from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";
export interface StudentTestData {
    test: {
        id: number;
        name: string;
    };
    classroom: {
        id: number;
        name: string;
    };
    student: {
        id: number;
        name: string;
    };
    questions: {
        question_id: number;
        question_name: string;
        score: null;
    }[];
}
/** Lists all tests with classroom info */
/** GET /test */
export declare namespace TestList {
    interface Request extends Test {
        classroom: Classroom;
    }
}
/** Gets test results with all student answers */
/** GET /test/:id/results */
export declare namespace TestRisultatiData {
    interface Response {
        test: Test;
        questions: Question[];
        answers: Answer & Student & {
            scores: Record<number, {
                grade: number | null;
                grade_bonus: number | null;
                is_blank: boolean;
                word_count: number;
                status: "blank" | "filled" | "to_fill";
                booleanq_yes?: number;
            }>;
        }[];
    }
}
/** Creates a new test in a classroom */
/** POST /test */
export declare namespace TestCreate {
    interface Request {
        class_id: number;
        name: string;
    }
    type Response = OkIdResponse;
}
/** Updates test fields */
/** PUT /test/:id */
export declare namespace TestUpdate {
    type Request = Test;
    type Response = OkResponse;
}
/** Deletes a test */
/** DELETE /test/:id */
export declare namespace TestDelete {
    type Response = OkResponse;
}
/** Adds a question to a test */
/** POST /test/:id/question */
export declare namespace TestAddQuestion {
    interface Request {
        question_id: number;
        copy_rubric?: boolean;
    }
}
/** Updates the question position within a test */
/** PUT /test/:id/questions/:questionId */
export declare namespace TestQuestionPositionUpdate {
    interface Request {
        position: number | null;
    }
}
/** Gets a test by id */
/** GET /test/:id */
export declare namespace TestGetById {
    interface Response {
        test: Test;
        classroom: Classroom;
    }
}
/** Gets detailed test view with questions and students */
/** GET /test/:id/detail */
export declare namespace TestGetDetail {
    interface Response {
        test: Test;
        classroom: Classroom;
        students: Student[];
        questions: (Question & {
            criterion_count: number;
            criterion_nr_count: number;
            criterion_category: Record<CriterionCategory, number>;
        })[];
    }
}
/** Removes a question from a test */
/** DELETE /test/:id/questions/:questionId */
export declare namespace TestRemoveQuestion { }
/** Upserts a student's grade for a test */
/** PATCH /test/:id/students/:studentId/grade */
export declare namespace TestStudentGradeUpsert {
    interface Request {
        grade: number | null;
    }
}
/** Gets a student's summary within a test */
/** GET /test/tests/:id/students/:studentId */
export declare namespace TestStudentSummary {
    type Response = StudentTestData;
}
