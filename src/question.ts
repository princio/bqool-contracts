import type {
	Classroom,
	CriterionCategory,
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
/** POST /questions */
export namespace QuestionCreate {
	export type Request = Omit<Question, "id">;
}

/** Updates an existing question's fields */
/** PUT /questions/:id */
export namespace QuestionUpdate {
	export type Request = Partial<Omit<Question, "id">>;
}

/** Gets the grade parameters for a question */
/** GET /questions/:id/grade-params */
export namespace QuestionGetGradeParams {
	export type Response = Record<string, unknown>;
}

/** Updates the grade parameters for a question */
/** PUT /questions/:id/grade-params */
export namespace QuestionSetGradeParams {
	export interface Request {
		params_json: string;
	}
}

// ── Flat type aliases (used by backend controllers) ────────────────

export type UpdateQuestionRequest = QuestionUpdate.Request;
