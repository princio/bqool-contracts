import type { BooleanQ, Criterion } from "@princio/bqool";
/** Lists criteria for a question */
/** GET /criterion/criteria?question_id=:questionId */
export declare namespace RubricCriteria {
    interface Response {
        criteria: Criterion[];
    }
}
/** Creates a new criterion */
/** POST /criterion/questions/:questionId/criteria */
export declare namespace CriterionCreate {
    type Request = Omit<Criterion, "id">;
}
/** Updates a single field on a criterion */
/** PATCH /criterion/criteria/:id */
export declare namespace CriterionUpdate {
    type Request = Partial<Omit<Criterion, "id">>;
}
/** Gets a criterion with its boolean questions */
/** GET /criterion/criteria/:id/detail */
export declare namespace CriterionBooleanQList {
    interface Response {
        criterion: Criterion;
        booleanqs: BooleanQ[];
    }
}
