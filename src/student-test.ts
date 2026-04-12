import type { GridScore, Student, StudentTest, Test } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists student-tests for a given test */
export namespace StudentTestList {
	export const route = { method: 'GET', path: '/student-test' } as const;
	export interface Query {
		test_id: number;
	};
	export type Response = StudentTest[];
}

/** Gets a student-test by id */
export namespace StudentTestGet {
	export const route = { method: 'GET', path: '/student-test/:id' } as const;
	export type Params = IdParams;
	export interface Response extends StudentTest {
		student: Student;
		test: Test;
	}
}

/** Creates a new student-test record */
export namespace StudentTestCreate {
	export const route = { method: 'POST', path: '/student-test' } as const;
	export interface Body {
		student_id: number;
		test_id: number;
	}
	export type Response = OkIdResponse;
}

/** Deletes a student-test record */
export namespace StudentTestDelete {
	export const route = { method: 'DELETE', path: '/student-test/:id' } as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a student-test's grid scores */
export namespace StudentTestUpdateGrid {
	export const route = { method: 'PATCH', path: '/student-test/:id/grid' } as const;
	export type Params = IdParams;
	export type Body = GridScore;
	export type Response = OkResponse;
}

/** Updates a student-test's grade */
export namespace StudentTestUpdateGrade {
	export const route = { method: 'PATCH', path: '/student-test/:id/grade' } as const;
	export type Params = IdParams;
	export interface Body {
		value: number | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}

/** Updates a student-test's bonus */
export namespace StudentTestUpdateBonus {
	export const route = { method: 'PATCH', path: '/student-test/:id/bonus' } as const;
	export type Params = IdParams;
	export interface Body {
		value: number | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}
