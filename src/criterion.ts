import type { BooleanQ, Criterion, Question } from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

// ── CriterionController (prefix: criterion/) ──────────────────────

/** Lists criteria for a question */
/** GET /criterion/list?question_id=:questionId */
/** @since 0.1.1 */
export namespace CriterionList {
	export type Response = Criterion[];
}

/** Creates a new criterion */
/** POST /criterion/questions/:questionId/criteria */
/** @since 0.1.0 */
export namespace CriterionCreate {
	export type Request = Omit<Criterion, "id">;
	export type Response = OkIdResponse;
}

/** Updates fields on a criterion */
/** PATCH /criterion/criteria/:id */
/** @since 0.1.0 */
export namespace CriterionUpdate {
	export type Request = Partial<Omit<Criterion, "id">>;
	export type Response = OkResponse;
}

/** Deletes a criterion */
/** DELETE /criterion/criteria/:id */
/** @since 0.1.0 */
export namespace CriterionDelete {
	export type Response = OkResponse;
}

/** Gets a single criterion */
/** GET /criterion/criteria/:id */
/** @since 0.1.0 */
export namespace CriterionGet {
	export type Response = Criterion;
}

/** Gets a criterion with its boolean questions */
/** GET /criterion/criteria/:id/detail */
/** @since 0.1.0 */
export namespace CriterionGetDetail {
	export interface Response {
		criterion: Criterion;
		question: Question;
		booleanqs: BooleanQ[];
	}
}
