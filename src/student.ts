import type {
	Classroom,
	Question,
	Student,
	StudentTest,
	Test,
} from "@princio/bqool";

// ── StudentController (prefix: /students) ─────────────────────────

/** Gets a student detail */
/** GET /students/:id */
export namespace StudentGet {
	export interface Response {
		student: Student;
		classroom: Classroom;
	}
}

/** Updates a student's name */
/** PUT /students/:id */
export namespace StudentUpdate {
	export type Request = Partial<Omit<Student, "id">>;
}

/** Gets a student's tests overview */
/** GET /students/:id/tests */
export namespace StudentTestsOverview {
	export interface Response {
		student: Student;
		classroom: Classroom;
		tests: {
			test: Test;
			student_test: StudentTest;
			questions: Question[];
		}[];
	}
}
