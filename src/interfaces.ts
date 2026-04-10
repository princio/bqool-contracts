import type {
	Answer,
	Classroom,
	Derived,
	Question,
	Student,
	Test,
} from "@princio/bqool";

/** Response structure for simple success operations */
export interface OkResponse {
	ok: boolean;
}

/** Response structure for operations that return a created/updated resource ID */
export interface OkIdResponse {
	ok: boolean;
	id: number;
}

/** Flat answer detail returned by GET /answer/:id and GET /answer/by-student */
export interface AnswerDetail extends Answer {
	question: Question;
	student: Student;
	criteria: Derived.AnswerCriterion[];
}

/** Question detail with test and answer statistics */
export interface QuestionDetail {
	question: Question;
	tests: (Test & { classroom: Classroom })[];
	answers: {
		number: number;
		blank: number;
		not_typed: number;
	};
}

/** Question row with test, classroom, and rubric information */
export interface QuestionListRow extends Question {
	test: Test | null;
	classroom: Classroom | null;
	rubric: Derived.Rubric;
	answers: {
		count: number;
		blank: number;
		not_typed: number;
	};
}

/** Question information in student test history with answer status */
export interface StudentTestsHistoryQuestion {
	id: number;
	name: string;
	word_count: number;
	is_blank: boolean;
	verdict: Answer["verdict"];
}
