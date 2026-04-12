import type {
	Classroom,
	Question,
	Test,
} from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";
import { AnswerCorrection } from "./answer-correction";

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists all tests with classroom info */
export namespace TestList {
	export const route = { method: 'GET', path: '/test' } as const;
	export type Row = Test & { classroom: Classroom };
	export type Response = Row[];
}

/** Gets a test by id */
export namespace TestGetById {
	export const route = { method: 'GET', path: '/test/:id' } as const;
	export type Params = IdParams;
	export interface Response {
		test: Test;
		classroom: Classroom;
	}
}

/** Creates a new test in a classroom */
export namespace TestCreate {
	export const route = { method: 'POST', path: '/test' } as const;
	export interface Body {
		class_id: number;
		name: string;
	}
	export type Response = OkIdResponse;
}

/** Deletes a test */
export namespace TestDelete {
	export const route = { method: 'DELETE', path: '/test/:id' } as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Gets test results with all student answers */
export namespace TestCorrections {
	export const route = { method: 'GET', path: '/test/:id/results' } as const;
	export type Params = IdParams;
	export interface Response {
		test: Test;
		questions: Question[];
		corrections: AnswerCorrection.Response[];
	}
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a test's name */
export namespace TestUpdateName {
	export const route = { method: 'PATCH', path: '/test/:id/name' } as const;
	export type Params = IdParams;
	export interface Body {
		name: string;
	}
	export type Response = OkResponse;
}

/** Sets the grid for a test */
export namespace TestSetGrid {
	export const route = { method: 'PATCH', path: '/test/:test_id/grid' } as const;
	export interface Params {
		test_id: number;
	}
	export interface Body {
		grid_id: number;
	}
	export type Response = OkResponse;
}
