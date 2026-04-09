import type {
	Answer,
	Classroom,
	Derived,
	Question,
	Student,
	StudentTest,
	Test,
} from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

// ── AnswerController (prefix: answers) ────────────────────────────

/** Lists all answers */
/** GET /answer */
/** @since 0.2.0 */
export namespace AnswerList {
	export type Response = AnswerDetail[];
}

/** Creates a single answer */
/** POST /answer */
/** @since 0.2.0 */
export namespace AnswerCreate {
	export interface Request {
		student_id: number;
		question_id: number;
		text?: string;
		is_blank?: boolean;
	}
	export type Response = OkIdResponse;
}

/** Toggles the protection status of an answer */
/** PATCH /answer/:id/protected */
/** @since 0.1.0 */
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
/** POST /answer/batch */
/** @since 0.1.0 */
export namespace AnswerBatchCreate {
	export interface Response {
		ok: boolean;
		created: number;
	}
}

// ── Request/Response namespaces ─────────────────────────────────────

/** Gets full answer detail with correction data */
/** GET /answer/:id */
/** @since 0.1.0 */
export namespace AnswerGetDetail {
	export interface Response extends Answer {
		question: Question;
		student: Student;
		criteria: Derived.AnswerCriterion[];
	}
}

/** Deletes an answer */
/** DELETE /answer/:id */
/** @since 0.1.0 */
export namespace AnswerDelete {
	export type Response = OkResponse;
}

/** Gets an answer by student and question */
/** GET /answer/by-student?question_id=:questionId&student_id=:studentId */
/** @since 0.1.0 */
export namespace AnswerByStudent {
	export type Response = Derived.AnswerCorrected | null;
}

/** Gets all answers for a student in a test */
/** GET /answer/by-test?student_id=:studentId&test_id=:testId */
/** @since 0.1.0 */
export namespace AnswerByTest {
	export interface Response extends StudentTest {
		test: Test;
		student: Student;
		classroom: Classroom;
		answers: Derived.AnswerCorrected[];
	}
}

// ── Actual backend shapes (alongside AnswerByStudent / AnswerByTest) ──
//
// The namespaces above are kept for the frontend / workflow-lowlevel
// consumers that import them. The current backend service returns the
// richer shapes below (flat answer detail, per-question wrapper). Backend
// controllers are typed against these.

/** Flat answer detail returned by GET /answer/:id and GET /answer/by-student */
export interface AnswerDetail extends Answer {
	question: Question;
	student: Student;
	criteria: Derived.AnswerCriterion[];
}

/** Gets full answer detail (current backend shape) */
/** GET /answer/:id */
/** @since 0.1.0 */
export namespace AnswerDetailById {
	export type Response = AnswerDetail;
}

/** Gets an answer by student and question (current backend shape) */
/** GET /answer/by-student?question_id=:questionId&student_id=:studentId */
/** @since 0.1.0 */
export namespace AnswerDetailByStudent {
	export type Response = AnswerDetail | null;
}

/** Gets a student's answers for a full test (current backend shape) */
/** GET /answer/by-test?student_id=:studentId&test_id=:testId */
/** @since 0.1.0 */
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
/** PUT /answer/by-student?question_id=:questionId&student_id=:studentId */
/** @since 0.1.0 */
export namespace AnswerUpdate {
	export interface Request {
		text?: string;
		blank?: boolean;
	}
	export type Response = OkResponse;
}

/** Sets the grade for an answer */
/** PATCH /answer/:id/grade */
/** @since 0.1.0 */
export namespace AnswerSetGrade {
	export interface Request {
		grade: number;
	}
	export type Response = OkResponse;
}

/** Sets the bonus for an answer */
/** PATCH /answer/:id/bonus */
/** @since 0.1.0 */
export namespace AnswerSetBonus {
	export interface Request {
		bonus: number | null;
	}
	export type Response = OkResponse;
}

/** Updates the grade rationale for an answer */
/** PATCH /answer/:id/grade_rationale */
/** @since 0.1.0 */
export namespace AnswerSetGradeRationale {
	export interface Request {
		grade_rationale: string;
	}
	export type Response = OkResponse;
}

/** Updates the coherence assessment for an answer */
/** PATCH /answer/:id/coherence */
/** @since 0.1.0 */
export namespace AnswerSetCoherence {
	export interface Request {
		level?: number;
		rationale?: string;
	}
	export type Response = OkResponse;
}
