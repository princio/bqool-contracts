export type { Question } from "@princio/bqool";

/** Creates a new question, optionally linked to a test */
export namespace QuestionCreate {
	export interface Request {
		name: string;
		text?: string;
		expected_answer?: string;
		test_id?: number;
	}
}

/** Updates an existing question's fields */
export namespace QuestionUpdate {
	export interface Request {
		name?: string;
		text?: string;
		expected_answer?: string;
	}
}
