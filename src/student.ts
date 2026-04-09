import type {
	Answer,
	Classroom,
	Question,
	Student,
	StudentTest,
	Test,
} from "@princio/bqool";
import type { OkResponse } from "./common";

// ── StudentController (prefix: /students) ─────────────────────────

/** Lists all students */
/** GET /students */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace StudentList {
	export type Response = (Student & { classroom: Classroom })[];
}

/** Gets a student detail */
/** GET /students/:id */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace StudentGet {
	export interface Response {
		student: Student;
		classroom: Classroom;
	}
}

/** Updates a student's name */
/** PUT /students/:id */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace StudentUpdate {
	export type Request = Partial<Omit<Student, "id">>;
	export type Response = OkResponse;
}

/** Gets a student's tests overview */
/** GET /students/:id/tests */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
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

// ── Actual backend shape (alongside StudentTestsOverview) ──
//
// StudentTestsOverview above is the historical shape kept for the frontend.
// The current backend service returns the richer shape below (per-question
// answer status). Controllers are typed against StudentTestsHistory.

/** Deletes a student */
/** DELETE /students/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace StudentDelete {
	export type Response = OkResponse;
}

export interface StudentTestsHistoryQuestion {
	id: number;
	name: string;
	word_count: number;
	is_blank: boolean;
	verdict: Answer["verdict"]
}

/** Gets a student's tests history with per-question answer status */
/** GET /students/:id/tests */
/** @since 0.1.0 */
/** @backend implemented */
/** @frontend implemented */
export namespace StudentTestsHistory {
	export interface Response {
		student: Student;
		classroom: Classroom;
		tests: (Test & {
			questions: StudentTestsHistoryQuestion[];
		})[];
	}
}
