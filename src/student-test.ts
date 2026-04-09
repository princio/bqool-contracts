import type { Student, StudentTest, Test } from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

// ── StudentTestController (prefix: student-tests/) ──────────────

/** Lists student-tests for a given test */
/** GET /student-tests?test_id=:testId */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace StudentTestList {
	export type Response = (StudentTest & { student: Student })[];
}

/** Gets a student-test by id */
/** GET /student-tests/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace StudentTestGet {
	export interface Response extends StudentTest {
		student: Student;
		test: Test;
	}
}

/** Creates a new student-test record */
/** POST /student-tests */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace StudentTestCreate {
	export interface Request {
		student_id: number;
		test_id: number;
	}
	export type Response = OkIdResponse;
}

/** Updates a student-test record */
/** PUT /student-tests/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace StudentTestUpdate {
	export type Request = Partial<Omit<StudentTest, "id">>;
	export type Response = OkResponse;
}

/** Deletes a student-test record */
/** DELETE /student-tests/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace StudentTestDelete {
	export type Response = OkResponse;
}
