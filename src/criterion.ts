import type { BooleanQ, Criterion } from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

// ── CriterionController (prefix: criterion/) ──────────────────────

/** Lists criteria for a question */
/** GET /criterion/criteria?question_id=:questionId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace RubricCriteria {
	export interface Response {
		criteria: Criterion[];
	}
}

/** Creates a new criterion */
/** POST /criterion/questions/:questionId/criteria */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace CriterionCreate {
	export type Request = Omit<Criterion, "id">;
	export type Response = OkIdResponse;
}

/** Updates fields on a criterion */
/** PATCH /criterion/criteria/:id */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace CriterionUpdate {
	export type Request = Partial<Omit<Criterion, "id">>;
	export type Response = OkResponse;
}

/** Deletes a criterion */
/** DELETE /criterion/criteria/:id */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace CriterionDelete {
	export type Response = OkResponse;
}

/** Gets a criterion with its boolean questions */
/** GET /criterion/criteria/:id/detail */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace CriterionBooleanQList {
	export interface Response {
		criterion: Criterion;
		booleanqs: BooleanQ[];
	}
}
