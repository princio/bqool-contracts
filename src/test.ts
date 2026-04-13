import type {
	Answer,
	Classroom,
	Question,
	Test,
} from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";
import { CorrectionAnswer } from "./correction";

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists tests, optionally filtered */
export namespace TestList {
	export const method = 'GET' as const;
	export const path = '/test' as const;
	export interface Query {
		classroom_id?: number;
	}
	export type Row = Test & { classroom: Classroom };
	export type Response = Row[];
}

/** Gets a test by id */
export namespace TestGetById {
	export const method = 'GET' as const;
	export const path = '/test/:id' as const;
	export type Params = IdParams;
	export type Response = Test;
}

/** Creates a new test in a classroom */
export namespace TestCreate {
	export const method = 'POST' as const;
	export const path = '/test' as const;
	export interface Body {
		class_id: number;
		name: string;
	}
	export type Response = OkIdResponse;
}

/** Deletes a test */
export namespace TestDelete {
	export const method = 'DELETE' as const;
	export const path = '/test/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Gets all answers for a test */
export namespace TestGetAnswers {
	export const method = 'GET' as const;
	export const path = '/test/:id/answers' as const;
	export type Params = IdParams;
	export type Response = Answer[];
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a test's name */
export namespace TestUpdateName {
	export const method = 'PATCH' as const;
	export const path = '/test/:id/name' as const;
	export type Params = IdParams;
	export interface Body {
		name: string;
	}
	export type Response = OkResponse;
}

/** Generates answer rows for all students in a test */
export namespace TestGenerateAnswers {
	export const method = 'POST' as const;
	export const path = '/test/:id/generate-answers' as const;
	export type Params = IdParams;
	export interface Response {
		ok: boolean;
		created: number;
	}
}

/** Checks answer and booleanq-answer coverage per student */
/** GET /test/:id/check */
export namespace TestCheck {
	export const method = 'GET' as const;
	export const path = '/test/:id/check' as const;
	export type Params = IdParams;
	export interface Row {
		student_id: number;
		student_name: string;
		answers: {
			expected: number;
			existents: number;
		};
		booleanq_answers: {
			expected: number;
			existents: number;
		};
	}
	export type Response = Row[];
}

/** Sets the grid for a test */
export namespace TestSetGrid {
	export const method = 'PATCH' as const;
	export const path = '/test/:test_id/grid' as const;
	export interface Params {
		test_id: number;
	}
	export interface Body {
		grid_id: number;
	}
	export type Response = OkResponse;
}
