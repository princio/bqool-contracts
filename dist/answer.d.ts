import type { Answer, AnswerPenmark, Classroom, Derived, Question, Student, StudentTest, Test } from "@princio/bqool";
/** Creates a new penmark annotation on an answer */
/** POST /answers/:id/penmark */
export declare namespace PenmarkCreate {
    interface Request extends Exclude<AnswerPenmark, "id"> {
    }
    interface Response {
        ok: boolean;
        penmark: AnswerPenmark;
    }
}
/** Toggles the protection status of an answer */
/** PATCH /answers/:id/protected */
export declare namespace AnswerToggleProtection {
    interface Request {
        protected: boolean;
    }
    interface Response {
        ok: boolean;
        is_locked: boolean;
    }
}
/** Creates answers in batch for a test */
/** POST /answers/batch */
export declare namespace AnswerBatchCreate {
    interface Response {
        ok: boolean;
        created: number;
    }
}
/** Gets full answer detail with correction data */
/** GET /answers/:id */
export declare namespace AnswerGetDetail {
    interface Response extends Answer {
        question: Question;
        student: Student;
        criteria: Derived.AnswerCriterion[];
    }
}
/** Deletes an answer */
/** DELETE /answers/:id */
export declare namespace AnswerDelete { }
/** Gets an answer by student and question */
/** GET /answers/by-student?question_id=:questionId&student_id=:studentId */
export declare namespace AnswerByStudent {
    type Response = Derived.AnswerCorrection | null;
}
/** Gets all answers for a student in a test */
/** GET /answers/by-test?student_id=:studentId&test_id=:testId */
export declare namespace AnswerByTest {
    interface Response extends StudentTest {
        test: Test;
        student: Student;
        classroom: Classroom;
        answers: Derived.AnswerCorrection[];
    }
}
/** Updates an answer's text or blank status */
/** PUT /answers/by-student?question_id=:questionId&student_id=:studentId */
export declare namespace AnswerUpdate {
    interface Request {
        text?: string;
        blank?: boolean;
    }
}
/** Sets the grade for an answer */
/** PATCH /answers/:id/grade */
export declare namespace AnswerSetGrade {
    interface Request {
        grade: number;
    }
}
/** Sets the bonus for an answer */
/** PATCH /answers/:id/bonus */
export declare namespace AnswerSetBonus {
    interface Request {
        bonus: number | null;
    }
}
/** Updates the grade rationale for an answer */
/** PATCH /answers/:id/grade_rationale */
export declare namespace AnswerSetGradeRationale {
    interface Request {
        grade_rationale: string;
    }
}
/** Updates the coherence assessment for an answer */
/** PATCH /answers/:id/coherence */
export declare namespace AnswerSetCoherence {
    interface Request {
        level?: number;
        rationale?: string;
    }
}
