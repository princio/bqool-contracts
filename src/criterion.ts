import type { BooleanQ, Criterion, CriterionCategory, Question } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── CriterionController (prefix: criterion/) ──────────────────────

/** Lists criteria for a question */
export namespace CriterionList {
	export const method = 'GET' as const;
	export const path = '/criterion/list' as const;
	export interface Query {
		question_id?: number;
		category?: CriterionCategory;
	}
	export type Response = Criterion[];
}

/** Gets a single criterion */
export namespace CriterionGet {
	export const method = 'GET' as const;
	export const path = '/criterion/criteria/:id' as const;
	export type Params = IdParams;
	export type Response = Criterion;
}

/** Creates a new criterion */
export namespace CriterionCreate {
	export const method = 'POST' as const;
	export const path = '/criterion' as const;
	export type Body = Omit<Criterion, "id" | "question" | "booleanqs"> & { question_id: number };
	export type Response = OkIdResponse;
}

/** Updates fields on a criterion */
export namespace CriterionUpdate {
	export const method = 'PATCH' as const;
	export const path = '/criterion/criteria/:id' as const;
	export type Params = IdParams;
	export type Body = Partial<Omit<Criterion, "id" | "question" | "booleanqs">> & { reset_reviews: boolean };
	export type Response = OkResponse;
}

/** Deletes a criterion */
export namespace CriterionDelete {
	export const method = 'DELETE' as const;
	export const path = '/criterion/criteria/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}