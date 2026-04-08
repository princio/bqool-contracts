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
import type { OkResponse } from "./common";


export interface AnswerCriteriaStats {
	booleanqs: {
		answered: number;
		total: number;
	}
	concepts: Record<'require' | 'not-required', {
		present: number;
		completeness: number; // number of booleanq answered over total PER CONCEPT
		total: number;
	}>;
	expressions: {
		positive: number;
		negative: number;
	}
	codes: {
		positive: number;
		negative: number;
	}
	errors: number;
}

// ── AnswerController (prefix: answers) ────────────────────────────

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
		is_locked: boolean;
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
		criteria: Derived.AnswerCriterion[];
	}
}

/** Deletes an answer */
/** DELETE /answers/:id */
export namespace AnswerDelete {
	export type Response = OkResponse;
}

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

// ── Actual backend shapes (alongside AnswerByStudent / AnswerByTest) ──
//
// The namespaces above are kept for the frontend / workflow-lowlevel
// consumers that import them. The current backend service returns the
// richer shapes below (flat answer detail, per-question wrapper). Backend
// controllers are typed against these.

/** Flat answer detail returned by GET /answers/:id and GET /answers/by-student */
export interface AnswerDetail extends Answer {
	question: Question;
	student: Student;
	criteria: Derived.AnswerCriterion[];
}

/** Gets full answer detail (current backend shape) */
/** GET /answers/:id */
export namespace AnswerDetailById {
	export type Response = AnswerDetail;
}

/** Gets an answer by student and question (current backend shape) */
/** GET /answers/by-student?question_id=:questionId&student_id=:studentId */
export namespace AnswerDetailByStudent {
	export type Response = AnswerDetail | null;
}

/** Gets a student's answers for a full test (current backend shape) */
/** GET /answers/by-test?student_id=:studentId&test_id=:testId */
export namespace AnswerByTestPage {
	export interface Response {
		test: Test;
		classroom: Classroom;
		student: Student;
		/** One slot per question in the test, in question order.
		 *  Null entries represent questions the student hasn't answered. */
		answers: (AnswerDetail | null)[];
	}
}

/** Updates an answer's text or blank status */
/** PUT /answers/by-student?question_id=:questionId&student_id=:studentId */
export namespace AnswerUpdate {
	export interface Request {
		text?: string;
		blank?: boolean;
	}
	export type Response = OkResponse;
}

/** Sets the grade for an answer */
/** PATCH /answers/:id/grade */
export namespace AnswerSetGrade {
	export interface Request {
		grade: number;
	}
	export type Response = OkResponse;
}

/** Sets the bonus for an answer */
/** PATCH /answers/:id/bonus */
export namespace AnswerSetBonus {
	export interface Request {
		bonus: number | null;
	}
	export type Response = OkResponse;
}

/** Updates the grade rationale for an answer */
/** PATCH /answers/:id/grade_rationale */
export namespace AnswerSetGradeRationale {
	export interface Request {
		grade_rationale: string;
	}
	export type Response = OkResponse;
}

/** Updates the coherence assessment for an answer */
/** PATCH /answers/:id/coherence */
export namespace AnswerSetCoherence {
	export interface Request {
		level?: number;
		rationale?: string;
	}
	export type Response = OkResponse;
}
