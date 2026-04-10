import type { Classroom, Question, Student, Test } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── ClassroomController (prefix: classroom) ───────────────────────

/** Lists all classrooms */
/** GET /classroom */
export namespace ClassroomList {
	export type Response = Classroom[];
}

/** Classroom detail with students and tests */
/** GET /classroom/:id */
export namespace ClassroomDetail {
	export type Params = IdParams;
	export interface Response extends Classroom {
		students: Student[];
		tests: (Test & { questions_count: number })[];
	}
}

/** Creates a new classroom */
/** POST /classroom */
export namespace ClassroomCreate {
	export interface Request {
		name: string;
	}
	export type Response = OkIdResponse;
}

/** Updates a classroom */
/** PUT /classroom/:id */
export namespace ClassroomUpdate {
	export type Params = IdParams;
	export type Request = Omit<Classroom, "id" | "students">;
	export type Response = OkResponse;
}

/** Deletes a classroom */
/** DELETE /classroom/:id */
export namespace ClassroomDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Classroom summary with test/question tree */
/** GET /classroom/dashboard */
export namespace ClassroomSummary {
	export type TestWithQuestion = Test & {
		questions: Pick<Question, "id" | "name">[];
	};
	export type Response = (Classroom & {
		students_count: number;
		tests: TestWithQuestion[];
	})[];
}

// ── Specific mutations ──────────────────────────────────────────

/** Adds a student to a classroom */
/** POST /classroom/:id/student */
export namespace ClassroomStudentAdd {
	export type Params = IdParams;
	export type Request = Omit<Student, "id" | 'classroom'>;
	export type Response = OkIdResponse;
}

/** Removes a student from a classroom */
/** DELETE /classroom/:id/student/:studentId */
export namespace ClassroomStudentRemove {
	export interface Params {
		id: number;
		studentId: number;
	}
	export type Response = OkResponse;
}
