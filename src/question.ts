import type {
	Classroom,
	CriterionCategory,
	GradeParams,
	Question,
	Test,
} from "@princio/bqool";

export type { Question } from "@princio/bqool";

export interface QuestionDetail {
	question: Question;
	tests: (Test & { classroom: Classroom })[];
	booleanq_count: number;
	criteria_count: Record<CriterionCategory, number>;
	criteria_notrequired_count: Record<CriterionCategory, number>;
	answers: {
		blank: number;
		not_typed: number;
	};
}
// ── Namespaces ─────────────────────────────────────────────────────

/** Lists all questions */
/** GET /questions */
export namespace QuestionList {
	export interface Response {
		questions: QuestionDetail[];
	}
}

/** Gets a single question detail */
/** GET /questions/:id */
export namespace QuestionGetDetail {
	export type Response = QuestionDetail;
}

/** Creates a new question, optionally linked to a test */
/** POST /questions?test_id=:testId */
export namespace QuestionCreate {
	export type Request = Partial<Omit<Question, "id">>;
}

/** Updates an existing question's fields */
/** PUT /questions/:id */
export namespace QuestionUpdate {
	export type Request = Partial<Omit<Question, "id">>;
}

/** Gets the grade parameters for a question */
/** GET /questions/:id/grade-params */
export namespace QuestionGetGradeParams {
	export type Response = GradeParams | null;
}

/** Updates the grade parameters for a question */
/** PUT /questions/:id/grade-params */
export namespace QuestionSetGradeParams {
	export interface Request {
		params_json: string;
	}
}
