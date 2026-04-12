import type { BooleanQAnswer } from "@princio/bqool";
import type { IdParams, OkResponse } from "./common";

// ── BooleanQAnswerController (prefix: booleanq-answers) ─────────────

/** Lists booleanq-answers, optionally filtered */
export namespace BooleanQAnswerList {
	export const method = 'GET' as const;
	export const path = '/booleanq-answer' as const;
	export interface Query {
		answer_id?: number;
		booleanq_id?: number;
	}
	export type Response = BooleanQAnswer[];
}

/** Deletes a booleanq-answer */
export namespace BooleanQAnswerDelete {
	export const method = 'DELETE' as const;
	export const path = '/booleanq-answer/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Update a booleanq-answer with optional citations and rationale */
export namespace BooleanQAnswerUpdate {
	export const method = 'PATCH' as const;
	export const path = '/booleanq-answer/:id' as const;
	export type Params = IdParams;
	export interface Body {
		satisfied?: boolean;
		citations?: string[];
		rationale?: string;
	}
	export type Response = OkResponse;
}

/** Increment booleanq-answer review counter */
export namespace BooleanQAnswerReview {
	export const method = 'POST' as const;
	export const path = '/booleanq-answer/:id/review' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

/** Resets the review count for a booleanq-answer */
export namespace BooleanQAnswerReviewReset {
	export const method = 'DELETE' as const;
	export const path = '/booleanq-answer/:id/review' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

/** Initializes booleanq-answers for a student-question pair */
export namespace BooleanQAnswerInit {
	export const method = 'POST' as const;
	export const path = '/booleanq-answer/init' as const;
	export interface Query {
		answer_id: number;
	}
	export interface Response {
		ok: boolean;
		created: { criteria: number; booleanq_answers: number };
	}
}
