import type { BooleanQAnswer } from "@princio/bqool";
import type { IdParams, OkResponse } from "./common";

// ── BooleanQAnswerController (prefix: booleanq-answers) ─────────────

/** Lists booleanq-answers for an answer */
/** GET /booleanq-answer?answer_id=:answerId */
export namespace BooleanQAnswerList {
	export interface Query {
		answer_id: number;
	}
	export type Response = BooleanQAnswer[];
}

/** Deletes a booleanq-answer */
/** DELETE /booleanq-answer/:id */
export namespace BooleanQAnswerDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Update a booleanq-answer with optional citations and rationale */
/** PATCH /booleanq-answer/:booleanqId */
export namespace BooleanQAnswerUpdate {
	export type Params = IdParams;
	export interface Request {
		satisfied?: boolean;
		citations?: string[];
		rationale?: string;
	}
	export type Response = OkResponse;
}

/** Increment booleanq-answer review counter */
/** POST /booleanq-answer/:booleanqId/review */
export namespace BooleanQAnswerReview {
	export type Params = IdParams;
	export type Response = OkResponse;
}

/** Resets the review count for a booleanq-answer */
/** DELETE /booleanq-answer/:booleanqId/review */
export namespace BooleanQAnswerReviewReset {
	export type Params = IdParams;
	export type Response = OkResponse;
}

/** Initializes booleanq-answers for a student-question pair */
/** POST /booleanq-answer/init?answer_id=:answerId */
export namespace BooleanQAnswerInit {
	export interface Query {
		answer_id: number;
	}
	export interface Response {
		ok: boolean;
		created: { criteria: number; booleanq_answers: number };
	}
}
