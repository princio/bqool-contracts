import type { BooleanQ, Criterion } from "@princio/bqool";

// ── CriterionController (prefix: criterion/) ──────────────────────

/** Lists criteria for a question */
/** GET /criterion/criteria?question_id=:questionId */
export namespace RubricCriteria {
	export interface Response {
		criteria: Criterion[];
	}
}

/** Creates a new criterion */
/** POST /criterion/questions/:questionId/criteria */
export namespace CriterionCreate {
	export type Request = Omit<Criterion, "id">;
}

/** Updates a single field on a criterion */
/** PATCH /criterion/criteria/:id */
export namespace CriterionUpdate {
	export type Request = Partial<Omit<Criterion, "id">>;
}

/** Gets a criterion with its boolean questions */
/** GET /criterion/criteria/:id/detail */
export namespace CriterionBooleanQList {
	export interface Response {
		criterion: Criterion;
		booleanqs: BooleanQ[];
	}
}
