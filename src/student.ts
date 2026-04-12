import type {
	Classroom,
	Student,
} from "@princio/bqool";
import { IdParams, OkIdResponse, OkResponse } from "./common";

// ── StudentController (prefix: /student) ─────────────────────────

/** Lists all students */
export namespace StudentList {
	export const route = { method: 'GET', path: '/student' } as const;
	export type Response = (Student & { classroom: Classroom })[];
}

/** Gets a student detail */
export namespace StudentGet {
	export const route = { method: 'GET', path: '/student/:id' } as const;
	export type Params = IdParams;
	export interface Response {
		student: Student;
		classroom: Classroom;
	}
}

/** Creates a new student */
export namespace StudentCreate {
	export const route = { method: 'POST', path: '/student' } as const;
	export type Body = Omit<Student, 'id' | 'classroom'> & { classroom_id: number };
	export type Response = OkIdResponse;
}

/** Deletes a student */
export namespace StudentDelete {
	export const route = { method: 'DELETE', path: '/student/:id' } as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

/** Updates a student's name */
export namespace StudentUpdateName {
	export const route = { method: 'PATCH', path: '/student/:id' } as const;
	export type Params = IdParams;
	export interface Body {
		name: string;
	}
	export type Response = OkResponse;
}

/** Updates a student's classroom */
export namespace StudentUpdateClassroom {
	export const route = { method: 'PATCH', path: '/student/:id/classroom' } as const;
	export type Params = IdParams;
	export interface Body {
		classroom_id: number;
	}
	export type Response = OkResponse;
}
