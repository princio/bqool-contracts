import type { BooleanQAnswer } from "@princio/bqool";
import type { OkResponse } from "./common";

// ── BooleanQAnswerController (prefix: booleanq-answers) ─────────────

/** Initializes answer boolean-q evaluations for a student-question pair */
/** POST /booleanq-answer/init?answer_id=:answerId */
/** @since 0.1.1 */
export namespace BooleanQAnswerInit {
	export interface Response {
		ok: boolean;
		created: { criteria: number; booleanq_answers: number };
	}
}

/** Upserts a boolean-question answer with optional citations and rationale */
/** PATCH /booleanq-answer/:booleanqId?answer_id=:answerId */
/** @since 0.1.0 */
export namespace BooleanQAnswerUpsert {
	export interface Request {
		answer?: boolean;
		citations?: string[];
		rationale?: string;
	}
}

/** Marks a boolean-question answer as reviewed */
/** POST /booleanq-answer/:booleanqId/review?answer_id=:answerId */
/** @since 0.1.0 */
export namespace BooleanQAnswerReview {}

/** Resets the review count for a boolean-question answer */
/** DELETE /booleanq-answer/:booleanqId/review?answer_id=:answerId */
/** @since 0.1.0 */
export namespace BooleanQAnswerReviewReset {}

/** Lists boolean-question answers for an answer */
/** GET /booleanq-answer?answer_id=:answerId */
/** @since 0.2.0 */
export namespace BooleanQAnswerList {
	export type Response = BooleanQAnswer[];
}

/** Deletes a boolean-question answer */
/** DELETE /booleanq-answer/:id */
/** @since 0.2.0 */
export namespace BooleanQAnswerDelete {
	export type Response = OkResponse;
}
