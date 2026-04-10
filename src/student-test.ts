import type { GridScore, Student, StudentTest, Test } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── CRUD ───────────────────────────────────────────────────────────

/** Lists student-tests for a given test */
/** GET /student-test?test_id=:testId */
export namespace StudentTestList {
	export interface Query {
		test_id: number;
	};
	export type Response = StudentTest[];
}

/** Gets a student-test by id */
/** GET /student-test/:id */
export namespace StudentTestGet {
	export type Params = IdParams;
	export interface Response extends StudentTest {
		student: Student;
		test: Test;
	}
}

/** Creates a new student-test record */
/** POST /student-test */
export namespace StudentTestCreate {
	export interface Request {
		student_id: number;
		test_id: number;
	}
	export type Response = OkIdResponse;
}

/** Deletes a student-test record */
/** DELETE /student-test/:id */
export namespace StudentTestDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a student-test's grid scores */
/** PATCH /student-test/:id/grid */
export namespace StudentTestUpdateGrid {
	export type Params = IdParams;
	export type Request = GridScore;
	export type Response = OkResponse;
}

/** Updates a student-test's grade */
/** PATCH /student-test/:id/grade */
export namespace StudentTestUpdateGrade {
	export type Params = IdParams;
	export interface Request {
		value: number | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}

/** Updates a student-test's bonus */
/** PATCH /student-test/:id/bonus */
export namespace StudentTestUpdateBonus {
	export type Params = IdParams;
	export interface Request {
		value: number | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}