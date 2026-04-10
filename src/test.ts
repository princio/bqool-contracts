import type {
	Classroom,
	Question,
	Test,
} from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";
import { AnswerCorrection } from "./answer-correction";

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists all tests with classroom info */
/** GET /test */
export namespace TestList {
	export interface Request extends Test {
		classroom: Classroom;
	}
	export type Response = Request[];
}

/** Gets a test by id */
/** GET /test/:id */
export namespace TestGetById {
	export type Params = IdParams;
	export interface Response {
		test: Test;
		classroom: Classroom;
	}
}

/** Creates a new test in a classroom */
/** POST /test */
export namespace TestCreate {
	export interface Request {
		class_id: number;
		name: string;
	}
	export type Response = OkIdResponse;
}

/** Deletes a test */
/** DELETE /test/:id */
export namespace TestDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Gets test results with all student answers */
/** GET /test/:id/results */
export namespace TestCorrections {
	export type Params = IdParams;
	export interface Response {
		test: Test;
		questions: Question[];
		corrections: AnswerCorrection.Response[];
	}
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a test's name */
/** PATCH /test/:id/name */
export namespace TestUpdateName {
	export type Params = IdParams;
	export interface Request {
		name: string;
	}
	export type Response = OkResponse;
}

/** Sets the grid for a test */
/** PATCH /test/:test_id/grid */
export namespace TestSetGrid {
	export interface Params {
		test_id: number;
	}
	export interface Request {
		grid_id: number;
	}
	export type Response = OkResponse;
}
