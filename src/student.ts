import type {
	Answer,
	Classroom,
	Question,
	Student,
	StudentTest,
	Test,
} from "@princio/bqool";
import { IdParams, OkIdResponse, OkResponse } from "./common";

// ── StudentController (prefix: /student) ─────────────────────────

/** Lists all students */
/** GET /student */
export namespace StudentList {
	export type Response = (Student & { classroom: Classroom })[];
}

/** Gets a student detail */
/** GET /student/:id */
export namespace StudentGet {
	export type Params = IdParams;
	export interface Response {
		student: Student;
		classroom: Classroom;
	}
}

/** Creates a new student */
/** POST /student */
export namespace StudentCreate {
	export type Request = Omit<Student, 'id' | 'classroom'> & { classroom_id: number };
	export type Response = OkIdResponse;
}

/** Deletes a student */
/** DELETE /student/:id */
export namespace StudentDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

/** Updates a student's name */
/** PATCH /student/:id */
export namespace StudentUpdateName {
	export type Params = IdParams;
	export interface Request {
		name: string;
	}
	export type Response = OkResponse;
}

/** Updates a student's name */
/** PATCH /student/:id */
export namespace StudentUpdateClassroom {
	export type Params = IdParams;
	export interface Request {
		classroom_id: number;
	}
	export type Response = OkResponse;
}
