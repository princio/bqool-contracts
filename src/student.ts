import type {
	Classroom,
	Student,
} from "@princio/bqool";
import { IdParams, OkIdResponse, OkResponse } from "./common";

// ── StudentController (prefix: /student) ─────────────────────────

/** Lists all students */
export namespace StudentList {
	export const method = 'GET' as const;
	export const path = '/student' as const;
	export type Response = (Student & { classroom: Classroom })[];
}

/** Gets a student detail */
export namespace StudentGet {
	export const method = 'GET' as const;
	export const path = '/student/:id' as const;
	export type Params = IdParams;
	export interface Response {
		student: Student;
		classroom: Classroom;
	}
}

/** Creates a new student */
export namespace StudentCreate {
	export const method = 'POST' as const;
	export const path = '/student' as const;
	export type Body = Omit<Student, 'id' | 'classroom'> & { classroom_id: number };
	export type Response = OkIdResponse;
}

/** Deletes a student */
export namespace StudentDelete {
	export const method = 'DELETE' as const;
	export const path = '/student/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

/** Updates a student's name */
export namespace StudentUpdateName {
	export const method = 'PATCH' as const;
	export const path = '/student/:id' as const;
	export type Params = IdParams;
	export interface Body {
		name: string;
	}
	export type Response = OkResponse;
}

/** Updates a student's classroom */
export namespace StudentUpdateClassroom {
	export const method = 'PATCH' as const;
	export const path = '/student/:id/classroom' as const;
	export type Params = IdParams;
	export interface Body {
		classroom_id: number;
	}
	export type Response = OkResponse;
}
