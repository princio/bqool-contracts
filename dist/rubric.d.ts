import type { Answer, BooleanQ, Classroom, Criterion, Question, Student } from "@princio/bqool";
/** Lists concepts for a question */
/** GET /rubric/concepts?question_id=:questionId */
export declare namespace RubricCriteria {
    interface Response {
        criteria: {
            criterion: Criterion;
            question: Question;
        };
    }
}
/** Creates a new criterion (generic, covers expression/code/error) */
/** POST /rubric/expressions | POST /rubric/codes | POST /rubric/errors */
export declare namespace CriterionCreate {
    type Request = Omit<Criterion, "id">;
}
/** Updates a single field on a criterion */
/** PATCH /rubric/concepts/:id */
export declare namespace CriterionUpdate {
    type Request = Partial<Omit<Criterion, "id">>;
}
/** Lists boolean questions for a criterion */
/** GET /rubric/booleanqs/:itemType/:itemId */
export declare namespace CriterionBooleanQList {
    interface Response {
        criterion: Criterion;
        booleanqs: BooleanQ[];
    }
}
/** Creates a new boolean question linked to a criterion */
/** POST /rubric/booleanqs */
export declare namespace BooleanQCreate {
    type Request = Omit<BooleanQ, "id">;
}
/** Updates a boolean question's text */
/** PATCH /rubric/booleanqs/:id */
export declare namespace BooleanQUpdate {
    type Request = Partial<Omit<BooleanQ, "id">>;
}
/** Deletes a boolean question */
/** DELETE /rubric/booleanqs/:id */
export declare namespace BooleanQDelete { }
/** Gets full rubric detail for a question */
/** GET /rubric/rubric/detail?question_id=:questionId */
export declare namespace RubricDetail {
    interface Response {
        question: Question;
        students: {
            student: Student;
            classroom: Classroom;
            answer: Answer;
        }[];
    }
}
