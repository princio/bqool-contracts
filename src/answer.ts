import type {
	Answer,
	Classroom,
	Derived,
	Penmark,
	Question,
	Student,
	StudentTest,
	Test,
} from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

// ── AnswerController (prefix: answers) ────────────────────────────

/** Lists all answers */
/** GET /answers */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace AnswerList {
	export type Response = AnswerDetail[];
}

/** Creates a single answer */
/** POST /answers */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace AnswerCreate {
	export interface Request {
		student_id: number;
		question_id: number;
		text?: string;
		is_blank?: boolean;
	}
	export type Response = OkIdResponse;
}

/** Creates a new penmark annotation on an answer */
/** POST /answers/:id/penmark */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace PenmarkCreate {
	export interface Request extends Exclude<Penmark, "id"> {}
	export interface Response {
		ok: boolean;
		penmark: Penmark;
	}
}

/** Lists penmarks for an answer */
/** GET /answers/:id/penmarks */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace PenmarkList {
	export type Response = Penmark[];
}

/** Updates a penmark annotation */
/** PATCH /answers/:answerId/penmarks/:penmarkId */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace PenmarkUpdate {
	export type Request = Partial<Omit<Penmark, "id">>;
	export type Response = OkResponse;
}

/** Deletes a penmark annotation */
/** DELETE /answers/:answerId/penmarks/:penmarkId */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace PenmarkDelete {
	export type Response = OkResponse;
}

/** Toggles the protection status of an answer */
/** PATCH /answers/:id/protected */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
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
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerBatchCreate {
	export interface Response {
		ok: boolean;
		created: number;
	}
}

// ── Request/Response namespaces ─────────────────────────────────────

/** Gets full answer detail with correction data */
/** GET /answers/:id */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerGetDetail {
	export interface Response extends Answer {
		question: Question;
		student: Student;
		criteria: Derived.AnswerCriterion[];
	}
}

/** Deletes an answer */
/** DELETE /answers/:id */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerDelete {
	export type Response = OkResponse;
}

/** Gets an answer by student and question */
/** GET /answers/by-student?question_id=:questionId&student_id=:studentId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerByStudent {
	export type Response = Derived.AnswerCorrected | null;
}

/** Gets all answers for a student in a test */
/** GET /answers/by-test?student_id=:studentId&test_id=:testId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
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

/** Flat answer detail returned by GET /answers/:id and GET /answers/by-student */
export interface AnswerDetail extends Answer {
	question: Question;
	student: Student;
	criteria: Derived.AnswerCriterion[];
}

/** Gets full answer detail (current backend shape) */
/** GET /answers/:id */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerDetailById {
	export type Response = AnswerDetail;
}

/** Gets an answer by student and question (current backend shape) */
/** GET /answers/by-student?question_id=:questionId&student_id=:studentId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerDetailByStudent {
	export type Response = AnswerDetail | null;
}

/** Gets a student's answers for a full test (current backend shape) */
/** GET /answers/by-test?student_id=:studentId&test_id=:testId */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
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
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerUpdate {
	export interface Request {
		text?: string;
		blank?: boolean;
	}
	export type Response = OkResponse;
}

/** Sets the grade for an answer */
/** PATCH /answers/:id/grade */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerSetGrade {
	export interface Request {
		grade: number;
	}
	export type Response = OkResponse;
}

/** Sets the bonus for an answer */
/** PATCH /answers/:id/bonus */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerSetBonus {
	export interface Request {
		bonus: number | null;
	}
	export type Response = OkResponse;
}

/** Updates the grade rationale for an answer */
/** PATCH /answers/:id/grade_rationale */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerSetGradeRationale {
	export interface Request {
		grade_rationale: string;
	}
	export type Response = OkResponse;
}

/** Updates the coherence assessment for an answer */
/** PATCH /answers/:id/coherence */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace AnswerSetCoherence {
	export interface Request {
		level?: number;
		rationale?: string;
	}
	export type Response = OkResponse;
}
