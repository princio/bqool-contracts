import type { BooleanQAnswer } from "@princio/bqool";
import type { OkResponse } from "./common";

// ── BooleanQAnswerController (prefix: booleanq-answers) ─────────────

/** Initializes answer boolean-q evaluations for a student-question pair */
/** POST /booleanq-answers/init?answer_id=:answerId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerInit {
	export interface Response {
		ok: boolean;
		created: { criteria: number; booleanq_answers: number };
	}
}

/** Upserts a boolean-question answer with optional citations and rationale */
/** PATCH /booleanq-answers/:booleanqId?answer_id=:answerId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace BooleanQAnswerUpsert {
	export interface Request {
		answer?: boolean;
		citations?: string[];
		rationale?: string;
	}
}

/** Marks a boolean-question answer as reviewed */
/** POST /booleanq-answers/:booleanqId/review?answer_id=:answerId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace BooleanQAnswerReview {}

/** Resets the review count for a boolean-question answer */
/** DELETE /booleanq-answers/:booleanqId/review?answer_id=:answerId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace BooleanQAnswerReviewReset {}

/** Lists boolean-question answers for an answer */
/** GET /booleanq-answers?answer_id=:answerId */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace BooleanQAnswerList {
	export type Response = BooleanQAnswer[];
}

/** Deletes a boolean-question answer */
/** DELETE /booleanq-answers/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace BooleanQAnswerDelete {
	export type Response = OkResponse;
}
