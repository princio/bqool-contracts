import type { GridScore, Student, StudentTest, Test } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists student-tests, optionally filtered */
export namespace StudentTestList {
	export const method = 'GET' as const;
	export const path = '/student-test' as const;
	export interface Query {
		test_id?: number;
		student_id?: number;
	};
	export type Response = StudentTest[];
}

/** Gets a student-test by id */
export namespace StudentTestGet {
	export const method = 'GET' as const;
	export const path = '/student-test/:id' as const;
	export type Params = IdParams;
	export interface Response extends StudentTest {
		student: Student;
		test: Test;
	}
}

/** Creates a new student-test record */
export namespace StudentTestCreate {
	export const method = 'POST' as const;
	export const path = '/student-test' as const;
	export interface Body {
		student_id: number;
		test_id: number;
	}
	export type Response = OkIdResponse;
}

/** Deletes a student-test record */
export namespace StudentTestDelete {
	export const method = 'DELETE' as const;
	export const path = '/student-test/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a student-test's grid scores */
export namespace StudentTestUpdateGrid {
	export const method = 'PATCH' as const;
	export const path = '/student-test/:id/grid' as const;
	export type Params = IdParams;
	export type Body = GridScore;
	export type Response = OkResponse;
}

/** Updates a student-test's grade */
export namespace StudentTestUpdateGrade {
	export const method = 'PATCH' as const;
	export const path = '/student-test/:id/grade' as const;
	export type Params = IdParams;
	export interface Body {
		value: number | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}

/** Updates a student-test's bonus */
export namespace StudentTestUpdateBonus {
	export const method = 'PATCH' as const;
	export const path = '/student-test/:id/bonus' as const;
	export type Params = IdParams;
	export interface Body {
		value: number | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}
