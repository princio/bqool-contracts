import type {
	Answer,
	Question,
} from "@princio/bqool";

import { IdParams, OkIdResponse, OkResponse } from "./common";

export type { Question } from "@princio/bqool";

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists all questions */
/** GET /question/all */
export namespace QuestionList {
	export interface Response {
		questions: Question[];
	}
}

/** Gets a single question (bare domain object) */
/** GET /question/:id */
export namespace QuestionGet {
	export type Params = IdParams;
	export type Response = Question;
}

/** Creates a standalone question (not linked to a test) */
/** POST /question */
export namespace QuestionCreate {
	export interface Query {
		test_id: number;
	}
	export type Request = Omit<Question, "id" | "test" | "criteria" | "answers">;
	export type Response = OkIdResponse;
}

/** Updates a question's fields */
/** PUT /question/:id */
export namespace QuestionUpdate {
	export type Params = IdParams;
	export type Request = Partial<Omit<Question, "id" | "test" | "criteria" | "answers">>;
	export type Response = OkResponse;
}

/** Deletes a question */
/** DELETE /question/:id */
export namespace QuestionDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ────────────────────────────────────────────────────────

/** Gets question detail with per-student stats (current backend shape) */
/** GET /question/:id/answers */
export namespace QuestionWithAnswers {
	export type Params = IdParams;
	export interface Response extends Question {
		answers: Answer[];
	}
}

// ── Specific mutations ─────────────────────────────────────────────

/** Sets the test for a question */
/** PATCH /question/:id/test */
export namespace QuestionSetTest {
	export type Params = IdParams;
	export interface Request {
		test_id: number;
	}
	export type Response = OkResponse;
}

/** Updates the grade parameters for a question */
/** PUT /question/:id/grade-params */
export namespace QuestionSetGradeParams {
	export type Params = IdParams;
	export interface Request {
		params_json: string;
	}
	export type Response = OkResponse;
}
