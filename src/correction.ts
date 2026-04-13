import type {
	Correction,
	StudentTest,
	Test,
} from "@princio/bqool";
import { IdParams } from "./common";

// ── Answer Correction ──────────────────────────────────────────────

/** Gets answer with correction data */
export namespace CorrectionAnswer {
	export const method = 'GET' as const;
	export const path = '/correction/:answer_id/answer' as const;
	export type Params = IdParams;
	export type Response = Correction.Answer;
}

/** Gets answer with correction data */
export namespace CorrectionStudentTest {
	export const method = 'GET' as const;
	export const path = '/correction/:student_test_id/student-test' as const;
	export type Params = IdParams;
	export type Response = Omit<StudentTest, 'answers'> & ({
		corrections: Correction.Answer[];
	});
}

/** Gets answer with correction data */
export namespace CorrectionTest {
	export const method = 'GET' as const;
	export const path = '/correction/:test_id/test' as const;
	export type Params = IdParams;
	export type Response = CorrectionStudentTest.Response[];
}