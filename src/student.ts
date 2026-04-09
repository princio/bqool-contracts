import type {
	Answer,
	Classroom,
	Question,
	Student,
	StudentTest,
	Test,
} from "@princio/bqool";
import type { OkResponse } from "./common";

// ── StudentController (prefix: /student) ─────────────────────────

/** Lists all students */
/** GET /student */
/** @since 0.2.0 */
export namespace StudentList {
	export type Response = (Student & { classroom: Classroom })[];
}

/** Gets a student detail */
/** GET /student/:id */
/** @since 0.1.0 */
export namespace StudentGet {
	export interface Response {
		student: Student;
		classroom: Classroom;
	}
}

/** Updates a student's name */
/** PUT /student/:id */
/** @since 0.1.0 */
export namespace StudentUpdate {
	export type Request = Partial<Omit<Student, "id">>;
	export type Response = OkResponse;
}

/** Gets a student's tests overview */
/** GET /student/:id/tests */
/** @since 0.1.0 */
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
/** DELETE /student/:id */
/** @since 0.2.0 */
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
/** GET /student/:id/tests */
/** @since 0.1.0 */
export namespace StudentTestsHistory {
	export interface Response {
		student: Student;
		classroom: Classroom;
		tests: (Test & {
			questions: StudentTestsHistoryQuestion[];
		})[];
	}
}
