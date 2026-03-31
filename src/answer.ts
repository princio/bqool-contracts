import type {
	Answer,
	AnswerPenmark,
	Classroom,
	Derived,
	Question,
	Student,
	StudentTest,
	Test,
} from "@princio/bqool";

// ── Response-only namespaces ───────────────────────────────────────

/** Initializes answer boolean-q evaluations for a student-question pair */
/** POST /boolean-answers/init?answer_id=:answerId */
export namespace AnswerInit {
	export interface Response {
		ok: boolean;
		created: { criteria: number; boolean_answers: number };
	}
}

/** Creates a new penmark annotation on an answer */
/** POST /answers/:id/penmark */
export namespace PenmarkCreate {
	export interface Request extends Exclude<AnswerPenmark, "id"> {}
	export interface Response {
		ok: boolean;
		penmark: AnswerPenmark;
	}
}

/** Toggles the protection status of an answer */
/** PATCH /answers/:id/protected */
export namespace AnswerToggleProtection {
	export interface Request {
		protected: boolean;
	}
	export interface Response {
		ok: boolean;
		protected: number;
	}
}

/** Creates answers in batch for a test */
/** POST /answers/batch */
export namespace AnswerBatchCreate {
	export interface Response {
		ok: boolean;
		created: number;
	}
}

// ── Request/Response namespaces ─────────────────────────────────────

/** Gets full answer detail with correction data */
/** GET /answers/:id */
export namespace AnswerGetDetail {
	export interface Response extends Answer {
		question: Question;
		student: Student;
		correction: Derived.AnswerCorrection;
	}
}

/** Deletes an answer */
/** DELETE /answers/:id */
export namespace AnswerDelete {}

/** Gets an answer by student and question */
/** GET /answers/by-student?question_id=:questionId&student_id=:studentId */
export namespace AnswerByStudent {
	export type Response = Derived.AnswerCorrection | null;
}

/** Gets all answers for a student in a test */
/** GET /answers/by-test?student_id=:studentId&test_id=:testId */
export namespace AnswerByTest {
	export interface Response extends StudentTest {
		test: Test;
		student: Student;
		classroom: Classroom;
		answers: Derived.AnswerCorrection[];
	}
}

/** Updates an answer's text or blank status */
/** PUT /students/:id/questions/:questionId/answer */
export namespace AnswerUpdate {
	export interface Request {
		text?: string;
		blank?: boolean;
	}
}

/** Sets the grade for an answer */
/** PATCH /answers/:id/grade */
export namespace AnswerSetGrade {
	export interface Request {
		grade: number;
	}
}

/** Sets the bonus for an answer */
/** PATCH /answers/:id/bonus */
export namespace AnswerSetBonus {
	export interface Request {
		bonus: number | null;
	}
}

/** Updates the grade rationale for an answer */
/** PATCH /answers/:id/grade_rationale */
export namespace AnswerSetGradeRationale {
	export interface Request {
		grade_rationale: string;
	}
}

/** Updates the coherence assessment for an answer */
/** PATCH /answers/:id/coherence */
export namespace AnswerSetCoherence {
	export interface Request {
		level?: number;
		rationale?: string;
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
