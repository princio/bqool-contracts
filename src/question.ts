import type {
	Answer,
	Question,
} from "@princio/bqool";

import { IdParams, OkIdResponse, OkResponse } from "./common";

export type { Question } from "@princio/bqool";

// ── Controller prefix ──────────────────────────────────────────────

export const QuestionPrefix = '/question';

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists questions, optionally filtered */
export namespace QuestionList {
	export const method = 'GET' as const;
	export const path = '/all' as const;
	export interface Query {
		test_id?: number;
	}
	export type Response = Question[];
}

/** Gets a single question (bare domain object) */
export namespace QuestionGet {
	export const method = 'GET' as const;
	export const path = '/:id' as const;
	export type Params = IdParams;
	export type Response = Question;
}

/** Creates a question */
export namespace QuestionCreate {
	export const method = 'POST' as const;
	export const path = '/' as const;
	export type Body = Omit<Question, "id" | "test" | "criteria" | "answers"> & { test_id: number };
	export type Response = OkIdResponse;
}

/** Updates a question's fields */
export namespace QuestionUpdate {
	export const method = 'PUT' as const;
	export const path = '/:id' as const;
	export type Params = IdParams;
	export type Body = Partial<Omit<Question, "id" | "test" | "criteria" | "answers">>;
	export type Response = OkResponse;
}

/** Deletes a question */
export namespace QuestionDelete {
	export const method = 'DELETE' as const;
	export const path = '/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ────────────────────────────────────────────────────────

/** Gets question with per-student stats (current backend shape) */
export namespace QuestionWithAnswers {
	export const method = 'GET' as const;
	export const path = '/:id/answers' as const;
	export type Params = IdParams;
	export interface Response extends Question {
		answers: Answer[];
	}
}

// ── Specific mutations ─────────────────────────────────────────────

/** Sets the test for a question */
export namespace QuestionSetTest {
	export const method = 'PATCH' as const;
	export const path = '/:id/test' as const;
	export type Params = IdParams;
	export interface Body {
		test_id: number;
	}
	export type Response = OkResponse;
}

/** Updates the grade parameters for a question */
export namespace QuestionSetGradeParams {
	export const method = 'PUT' as const;
	export const path = '/:id/grade-params' as const;
	export type Params = IdParams;
	export interface Body {
		params_json: string;
	}
	export type Response = OkResponse;
}
