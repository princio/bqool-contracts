import type {
	Answer,
	Question,
} from "@princio/bqool";

import { IdParams, OkIdResponse, OkResponse } from "./common";

export type { Question } from "@princio/bqool";

// ── Controller prefix ──────────────────────────────────────────────

export const QuestionPrefix = '/question';

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists all questions */
export namespace QuestionList {
	export const route = { method: 'GET', prefix: QuestionPrefix, path: '/all' } as const;
	export interface Response {
		questions: Question[];
	}
}

/** Gets a single question (bare domain object) */
export namespace QuestionGet {
	export const route = { method: 'GET', prefix: QuestionPrefix, path: '/:id' } as const;
	export type Params = IdParams;
	export type Response = Question;
}

/** Creates a standalone question (not linked to a test) */
export namespace QuestionCreate {
	export const route = { method: 'POST', prefix: QuestionPrefix, path: '/' } as const;
	export interface Query {
		test_id: number;
	}
	export type Body = Omit<Question, "id" | "test" | "criteria" | "answers">;
	export type Response = OkIdResponse;
}

/** Updates a question's fields */
export namespace QuestionUpdate {
	export const route = { method: 'PUT', prefix: QuestionPrefix, path: '/:id' } as const;
	export type Params = IdParams;
	export type Body = Partial<Omit<Question, "id" | "test" | "criteria" | "answers">>;
	export type Response = OkResponse;
}

/** Deletes a question */
export namespace QuestionDelete {
	export const route = { method: 'DELETE', prefix: QuestionPrefix, path: '/:id' } as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ────────────────────────────────────────────────────────

/** Gets question detail with per-student stats (current backend shape) */
export namespace QuestionWithAnswers {
	export const route = { method: 'GET', prefix: QuestionPrefix, path: '/:id/answers' } as const;
	export type Params = IdParams;
	export interface Response extends Question {
		answers: Answer[];
	}
}

// ── Specific mutations ─────────────────────────────────────────────

/** Sets the test for a question */
export namespace QuestionSetTest {
	export const route = { method: 'PATCH', prefix: QuestionPrefix, path: '/:id/test' } as const;
	export type Params = IdParams;
	export interface Body {
		test_id: number;
	}
	export type Response = OkResponse;
}

/** Updates the grade parameters for a question */
export namespace QuestionSetGradeParams {
	export const route = { method: 'PUT', prefix: QuestionPrefix, path: '/:id/grade-params' } as const;
	export type Params = IdParams;
	export interface Body {
		params_json: string;
	}
	export type Response = OkResponse;
}
