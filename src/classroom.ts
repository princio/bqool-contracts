import type { Classroom, Question, Student, Test } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── ClassroomController (prefix: classroom) ───────────────────────

/** Lists all classrooms */
export namespace ClassroomList {
	export const method = 'GET' as const;
	export const path = '/classroom' as const;
	export type Response = Classroom[];
}

/** Classroom detail with students and tests */
export namespace ClassroomDetail {
	export const method = 'GET' as const;
	export const path = '/classroom/:id' as const;
	export type Params = IdParams;
	export interface Response extends Classroom {
		students: Student[];
		tests: (Test & { questions_count: number })[];
	}
}

/** Creates a new classroom */
export namespace ClassroomCreate {
	export const method = 'POST' as const;
	export const path = '/classroom' as const;
	export interface Body {
		name: string;
	}
	export type Response = OkIdResponse;
}

/** Updates a classroom */
export namespace ClassroomUpdate {
	export const method = 'PUT' as const;
	export const path = '/classroom/:id' as const;
	export type Params = IdParams;
	export type Body = Omit<Classroom, "id" | "students">;
	export type Response = OkResponse;
}

/** Deletes a classroom */
export namespace ClassroomDelete {
	export const method = 'DELETE' as const;
	export const path = '/classroom/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Classroom summary with test/question tree */
export namespace ClassroomSummary {
	export const method = 'GET' as const;
	export const path = '/classroom/dashboard' as const;
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
export namespace ClassroomStudentAdd {
	export const method = 'POST' as const;
	export const path = '/classroom/:id/student' as const;
	export type Params = IdParams;
	export type Body = Omit<Student, "id" | 'classroom'>;
	export type Response = OkIdResponse;
}

/** Removes a student from a classroom */
export namespace ClassroomStudentRemove {
	export const method = 'DELETE' as const;
	export const path = '/classroom/:id/student/:studentId' as const;
	export interface Params {
		id: number;
		studentId: number;
	}
	export type Response = OkResponse;
}
