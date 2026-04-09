import type {
	Answer,
	Classroom,
	CriterionCategory,
	Question,
	Student,
	Test,
} from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

export interface StudentTestData {
	test: { id: number; name: string };
	classroom: { id: number; name: string };
	student: { id: number; name: string };
	questions: {
		question_id: number;
		question_name: string;
		score: null;
	}[];
}

// ── Namespaces ─────────────────────────────────────────────────────

/** Lists all tests with classroom info */
/** GET /test */
/** @since 0.1.0 */
export namespace TestList {
	export interface Request extends Test {
		classroom: Classroom;
	}
	export type Response = Request[];
}

/** Gets test results with all student answers */
/** GET /test/:id/results */
/** @since 0.1.0 */
export namespace TestAnswers {
	export interface Response {
		test: Test;
		questions: Question[];
		answers: ({
			answer: Answer;
			student: Student;
			stats: {
				booleanq_yes?: number;
			},
		})[];
	}
}

/** Creates a new test in a classroom */
/** POST /test */
/** @since 0.1.0 */
export namespace TestCreate {
	export interface Request {
		class_id: number;
		name: string;
	}
	export type Response = OkIdResponse;
}

/** Updates test fields */
/** PUT /test/:id */
/** @since 0.1.0 */
export namespace TestUpdate {
	export type Request = Omit<Test, 'id'>;
	export type Response = OkResponse;
}

/** Deletes a test */
/** DELETE /test/:id */
/** @since 0.1.0 */
export namespace TestDelete {
	export type Response = OkResponse;
}

/** Adds a question to a test */
/** POST /test/:id/question */
/** @since 0.1.0 */
export namespace TestAddQuestion {
	export interface Request {
		question_id: number;
		copy_rubric?: boolean;
	}
	export type Response = OkIdResponse;
}

/** Updates the question position within a test */
/** PUT /test/:id/questions/:questionId */
/** @since 0.1.0 */
export namespace TestQuestionPositionUpdate {
	export interface Request {
		position: number | null;
	}
	export type Response = OkResponse;
}

/** Gets a test by id */
/** GET /test/:id */
/** @since 0.1.0 */
export namespace TestGetById {
	export interface Response {
		test: Test;
		classroom: Classroom;
	}
}

/** Gets detailed test view with questions and students */
/** GET /test/:id/detail */
/** @since 0.1.0 */
export namespace TestGetDetail {
	export interface Response {
		test: Test;
		classroom: Classroom;
		students: Student[];
		questions: (Question & {
			criterion_count: number;
			criterion_nr_count: number;
			criterion_category: Record<CriterionCategory, number>;
		})[];
	}
}

/** Removes a question from a test */
/** DELETE /test/:id/questions/:questionId */
/** @since 0.1.0 */
export namespace TestRemoveQuestion {
	export type Response = OkResponse;
}

/** Upserts a student's grade for a test */
/** PATCH /test/:id/student/:studentId/grade */
/** @since 0.1.0 */
export namespace TestStudentGradeUpsert {
	export interface Request {
		grade: number | null;
	}
	export type Response = OkResponse;
}

/** Gets a student's summary within a test */
/** GET /test/tests/:id/student/:studentId */
/** @since 0.1.0 */
export namespace TestStudentSummary {
	export type Response = StudentTestData;
}
