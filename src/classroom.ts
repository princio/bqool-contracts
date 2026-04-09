import type { Classroom, Question, Student, Test } from "@princio/bqool";
import type { OkResponse } from "./common";

// ── ClassroomController (prefix: classroom) ───────────────────────

/** Adds a student to a classroom */
/** POST /classroom/:id/student */
/** @since 0.1.0 */
export namespace StudentAdd {
	export type Request = Omit<Student, "id">;
}

/** Creates a new classroom */
/** POST /classroom */
/** @since 0.1.0 */
export namespace ClassroomCreate {
	export interface Request {
		name: string;
	}
}

/** Lists all classrooms */
/** GET /classroom */
/** @since 0.1.0 */
export namespace ClassroomList {
	export type Response = Classroom[];
}

/** Classroom detail with students and tests */
/** GET /classroom/:id */
/** @since 0.1.0 */
export namespace ClassroomDetail {
	export interface Response extends Classroom {
		students: Student[];
		tests: (Test & { questions_count: number })[];
	}
}

/** Classroom summary with test/question tree */
/** GET /classroom/dashboard */
/** @since 0.1.0 */
export namespace ClassroomSummary {
	export type TestWithQuestion = Test & {
		questions: Pick<Question, "id" | "name">[];
	};
	export type Response = (Classroom & {
		students_count: number;
		tests: TestWithQuestion[];
	})[];
}

/** Deletes a classroom */
/** DELETE /classroom/:id */
/** @since 0.1.0 */
export namespace ClassroomDelete {}

/** Updates a classroom */
/** PUT /classroom/:id */
/** @since 0.2.0 */
export namespace ClassroomUpdate {
	export type Request = Partial<Omit<Classroom, "id">>;
	export type Response = OkResponse;
}

/** Removes a student from a classroom */
/** DELETE /classroom/:id/student/:studentId */
/** @since 0.1.0 */
export namespace ClassroomStudentRemove {}
