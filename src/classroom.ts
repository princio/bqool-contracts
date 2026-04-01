import type { Classroom, Question, Student, Test } from "@princio/bqool";

// ── ClassroomController (prefix: classroom) ───────────────────────

/** Adds a student to a classroom */
/** POST /classroom/:id/students */
export namespace StudentAdd {
	export type Request = Omit<Student, "id">;
}

/** Creates a new classroom */
/** POST /classroom */
export namespace ClassroomCreate {
	export interface Request {
		name: string;
	}
}

/** Lists all classrooms */
/** GET /classroom */
export namespace ClassroomList {
	export type Response = Classroom[];
}

/** Classroom detail with students and tests */
/** GET /classroom/:id */
export namespace ClassroomDetail {
	export interface Response extends Classroom {
		students: Student[];
		tests: (Test & { questions_count: number })[];
	}
}

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

/** Deletes a classroom */
/** DELETE /classroom/:id */
export namespace ClassroomDelete {}

/** Removes a student from a classroom */
/** DELETE /classroom/:id/students/:studentId */
export namespace ClassroomStudentRemove {}
