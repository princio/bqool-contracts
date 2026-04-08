// ── BooleanQAnswerController (prefix: booleanq-answers) ─────────────

/** Initializes answer boolean-q evaluations for a student-question pair */
/** POST /booleanq-answers/init?answer_id=:answerId */
export namespace AnswerInit {
	export interface Response {
		ok: boolean;
		created: { criteria: number; booleanq_answers: number };
	}
}

/** Upserts a boolean-question answer with optional citations and rationale */
/** PATCH /booleanq-answers/:booleanqId?answer_id=:answerId */
export namespace BooleanQAnswerUpsert {
	export interface Request {
		answer?: boolean;
		citations?: string[];
		rationale?: string;
	}
}

/** Marks a boolean-question answer as reviewed */
/** POST /booleanq-answers/:booleanqId/review?answer_id=:answerId */
export namespace BooleanQAnswerReview {}

/** Resets the review count for a boolean-question answer */
/** DELETE /booleanq-answers/:booleanqId/review?answer_id=:answerId */
export namespace BooleanQAnswerReviewReset {}
