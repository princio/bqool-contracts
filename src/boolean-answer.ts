// ── BooleanAnswerController (prefix: boolean-answers) ─────────────

/** Initializes answer boolean-q evaluations for a student-question pair */
/** POST /boolean-answers/init?answer_id=:answerId */
export namespace AnswerInit {
	export interface Response {
		ok: boolean;
		created: { criteria: number; boolean_answers: number };
	}
}

/** Upserts a boolean-question answer with optional citations and rationale */
/** PATCH /boolean-answers/:booleanqId?answer_id=:answerId */
export namespace BooleanQAnswerUpsert {
	export interface Request {
		answer?: boolean;
		citations?: string[];
		rationale?: string;
	}
}

/** Marks a boolean-question answer as reviewed */
/** POST /boolean-answers/:booleanqId/review?answer_id=:answerId */
export namespace BooleanQAnswerReview {}

/** Resets the review count for a boolean-question answer */
/** DELETE /boolean-answers/:booleanqId/review?answer_id=:answerId */
export namespace BooleanQAnswerReviewReset {}
