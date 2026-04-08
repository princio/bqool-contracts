import type {
	Answer,
	Classroom,
	CriterionCategory,
	GradeParams,
	Question,
	Student,
	Test,
} from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

export type { Question } from "@princio/bqool";


export interface QuestionDetail {
	question: Question;
	tests: (Test & { classroom: Classroom })[];
	answers: {
		number: number;
		blank: number;
		not_typed: number;
	}
}
// ── Namespaces ─────────────────────────────────────────────────────

/** Lists all questions */
/** GET /question */
export namespace QuestionList {
	export interface Response {
		questions: QuestionDetail[];
	}
}

/** Gets a single question detail */
/** GET /question/:id */
export namespace QuestionGetDetail {
	export type Response = QuestionDetail;
}

/** Gets a single question (bare domain object) */
/** GET /question/:id */
export namespace QuestionGet {
	export type Response = Question;
}

// ── Actual backend shapes (alongside QuestionList / QuestionGetDetail above) ──
//
// QuestionList / QuestionGetDetail / QuestionDetail above are the historical
// shapes used by parts of the frontend. The current backend services return
// the richer shapes below; controllers are typed against these namespaces.
// Both sets are kept until the frontend has migrated.

/** Row returned by GET /question in the current backend */
export interface QuestionListRow extends Question {
	tests: (Test & { classroom: Classroom })[];
	answers: {
		number: number;
		blank: number;
		not_typed: number;
	}
}

/** Lists all questions (current backend shape) */
/** GET /question */
export namespace QuestionListRows {
	export type Response = QuestionListRow[];
}

export interface QuestionStudentSummary {
	question: Question;
	student: Student;
	classroom: Classroom;
	answer: Answer;
}

/** Gets question detail with per-student stats (current backend shape) */
/** GET /question/:id/summary */
export namespace QuestionSummary {
	export interface Response {
		usages: QuestionStudentSummary[];
	}
}

/** Creates a new question, optionally linked to a test */
/** POST /question?test_id=:testId */
export namespace QuestionCreate {
	export type Request = Partial<Omit<Question, "id">>;
	export type Response = OkIdResponse;
}

/** Updates an existing question's fields */
/** PUT /question/:id */
export namespace QuestionUpdate {
	export type Request = Partial<Omit<Question, "id">>;
	export type Response = OkResponse;
}

/** Gets the grade parameters for a question */
/** GET /question/:id/grade-params */
export namespace QuestionGetGradeParams {
	export type Response = GradeParams | null;
}

/** Updates the grade parameters for a question */
/** PUT /question/:id/grade-params */
export namespace QuestionSetGradeParams {
	export interface Request {
		params_json: string;
	}
	export type Response = OkResponse;
}
