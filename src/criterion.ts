import type { BooleanQ, Criterion, Question } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── CriterionController (prefix: criterion/) ──────────────────────

/** Lists criteria for a question */
/** GET /criterion/list?question_id=:questionId */
export namespace CriterionList {
	export interface Query {
		question_id: number;
	}
	export type Response = Criterion[];
}

/** Gets a single criterion */
/** GET /criterion/criteria/:id */
export namespace CriterionGet {
	export type Params = IdParams;
	export type Response = Criterion;
}

/** Creates a new criterion */
/** POST /criterion/questions/:questionId/criteria */
export namespace CriterionCreate {
	export interface Params {
		questionId: number;
	}
	export type Request = Omit<Criterion, "id" | "question" | "booleanqs">;
	export type Response = OkIdResponse;
}

/** Updates fields on a criterion */
/** PATCH /criterion/criteria/:id */
export namespace CriterionUpdate {
	export type Params = IdParams;
	export type Request = Partial<Omit<Criterion, "id" | "question" | "booleanqs">>;
	export type Response = OkResponse;
}

/** Deletes a criterion */
/** DELETE /criterion/criteria/:id */
export namespace CriterionDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Gets a criterion with its boolean questions */
/** GET /criterion/criteria/:id/detail */
export namespace CriterionGetDetail {
	export type Params = IdParams;
	export interface Response {
		criterion: Criterion;
		question: Question;
		booleanqs: BooleanQ[];
	}
}
