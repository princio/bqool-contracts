import type {
	SetBonus,
	SetGrade,
	ToggleProtection,
	UpdateAnswer,
	UpsertBooleanQAnswer,
} from "./answer";
import type {
	ClassroomSummary,
	CreateClassRoom,
} from "./classroom";
import type { OkIdResponse, OkResponse } from "./common";
import type { AnswerData, NavData } from "./nav";
import type {
	CreateQuestion,
	QuestionDetail,
	QuestionListItem,
	UpdateQuestion,
} from "./question";
import type {
	BooleanQ,
	CreateBooleanQ,
	RubricDetail,
	RubricExportData,
	SyncRubricPayload,
	UpdateBooleanQ,
	UpdateCriterionField,
} from "./rubric";
import type {
	AddStudent,
	StudentDetail,
	StudentTestAnswersData,
	StudentTestsData,
} from "./student";
import type {
	AddQuestionToTest,
	CreateTest,
	TestDetail,
	TestListItem,
	TestRef,
	TestRisultatiData,
	UpdateQuestionNumber,
	UpdateTest,
} from "./test";

/**
 * Maps each route key to its HTTP method, body, params, query, and response types.
 *
 * Provides a single source of truth tying API routes to their HTTP contract.
 */
export interface BackendApiTypeMap {
	dashboard: {
		get: { method: "GET"; body: never; response: unknown };
	};

	classes: {
		list: { method: "GET"; body: never; response: ClassroomSummary[] };
		create: {
			method: "POST";
			body: CreateClassRoom.Request;
			response: OkIdResponse;
		};
		one: {
			method: "GET";
			params: { id: number };
			body: never;
			response: ClassroomSummary;
		};
		update: {
			method: "PUT";
			params: { id: number };
			body: CreateClassRoom.Request;
			response: OkResponse;
		};
		delete: {
			method: "DELETE";
			params: { id: number };
			body: never;
			response: OkResponse;
		};
		students: {
			add: {
				method: "POST";
				params: { classId: number };
				body: AddStudent.Request;
				response: OkIdResponse;
			};
			remove: {
				method: "DELETE";
				params: { classId: number; studentId: number };
				body: never;
				response: OkResponse;
			};
		};
	};

	tests: {
		list: { method: "GET"; body: never; response: TestListItem[] };
		create: { method: "POST"; body: CreateTest.Request; response: OkIdResponse };
		one: {
			method: "GET";
			params: { id: number };
			body: never;
			response: TestRef;
		};
		update: {
			method: "PUT";
			params: { id: number };
			body: UpdateTest.Request;
			response: OkResponse;
		};
		delete: {
			method: "DELETE";
			params: { id: number };
			body: never;
			response: OkResponse;
		};
		detail: {
			method: "GET";
			params: { id: number };
			body: never;
			response: TestDetail;
		};
		results: {
			method: "GET";
			params: { id: number };
			body: never;
			response: TestRisultatiData;
		};
		questions: {
			add: {
				method: "POST";
				params: { testId: number };
				body: AddQuestionToTest.Request;
				response: OkResponse;
			};
			update: {
				method: "PUT";
				params: { testId: number; questionId: number };
				body: UpdateQuestionNumber.Request;
				response: OkResponse;
			};
			remove: {
				method: "DELETE";
				params: { testId: number; questionId: number };
				body: never;
				response: OkResponse;
			};
		};
		students: {
			summary: {
				method: "GET";
				params: { testId: number; studentId: number };
				body: never;
				response: unknown;
			};
			grade: {
				method: "GET";
				params: { testId: number; studentId: number };
				body: never;
				response: unknown;
			};
		};
	};

	questions: {
		list: { method: "GET"; body: never; response: QuestionListItem[] };
		create: {
			method: "POST";
			body: CreateQuestion.Request;
			response: OkIdResponse;
		};
		one: {
			method: "GET";
			params: { id: number };
			body: never;
			response: QuestionDetail;
		};
		update: {
			method: "PUT";
			params: { id: number };
			body: UpdateQuestion.Request;
			response: OkResponse;
		};
		delete: {
			method: "DELETE";
			params: { id: number };
			body: never;
			response: OkResponse;
		};
		gradeParams: {
			method: "GET";
			params: { id: number };
			body: never;
			response: unknown;
		};
	};

	students: {
		one: {
			method: "GET";
			params: { id: number };
			body: never;
			response: StudentDetail;
		};
		tests: {
			method: "GET";
			params: { id: number };
			body: never;
			response: StudentTestsData;
		};
		nav: {
			method: "GET";
			params: { id: number; questionId: number };
			body: never;
			response: NavData;
		};
		answer: {
			method: "GET";
			params: { id: number; questionId: number };
			body: never;
			response: AnswerData;
		};
		testAnswers: {
			method: "GET";
			params: { id: number; testId: number };
			body: never;
			response: StudentTestAnswersData;
		};
	};

	answers: {
		create: { method: "POST"; body: unknown; response: OkIdResponse };
		one: {
			method: "GET";
			params: { id: number };
			body: never;
			response: unknown;
		};
		update: {
			method: "PUT";
			params: { id: number };
			body: UpdateAnswer.Request;
			response: OkResponse;
		};
		protected: {
			method: "PUT";
			params: { id: number };
			body: never;
			response: ToggleProtection.Response;
		};
		grade: {
			method: "PUT";
			params: { id: number };
			body: SetGrade.Request;
			response: OkResponse;
		};
		bonus: {
			method: "PUT";
			params: { id: number };
			body: SetBonus.Request;
			response: OkResponse;
		};
		byStudent: {
			method: "GET";
			query: { student_id: number; question_id: number };
			body: never;
			response: unknown;
		};
		byTest: {
			method: "GET";
			query: { test_id: number };
			body: never;
			response: unknown;
		};
	};

	booleanqs: {
		list: {
			method: "GET";
			params: { itemType: string; itemId: number };
			body: never;
			response: BooleanQ[];
		};
		create: {
			method: "POST";
			body: CreateBooleanQ.Request;
			response: OkIdResponse;
		};
		one: {
			method: "GET";
			params: { id: number };
			body: never;
			response: BooleanQ;
		};
		update: {
			method: "PUT";
			params: { id: number };
			body: UpdateBooleanQ.Request;
			response: OkResponse;
		};
		delete: {
			method: "DELETE";
			params: { id: number };
			body: never;
			response: OkResponse;
		};
	};

	booleanAnswers: {
		init: { method: "POST"; body: unknown; response: unknown };
		one: {
			method: "PUT";
			params: { booleanqId: number };
			body: UpsertBooleanQAnswer.Request;
			response: OkResponse;
		};
		delete: {
			method: "DELETE";
			params: { booleanqId: number };
			body: never;
			response: OkResponse;
		};
		review: {
			method: "POST";
			params: { booleanqId: number };
			body: unknown;
			response: unknown;
		};
	};

	penmarks: {
		create: { method: "POST"; body: unknown; response: unknown };
	};

	rubric: {
		detail: {
			method: "GET";
			query: { question_id: number };
			body: never;
			response: RubricDetail;
		};
		export: {
			method: "GET";
			query: { question_id: number };
			body: never;
			response: RubricExportData;
		};
		sync: { method: "POST"; body: SyncRubricPayload; response: OkResponse };
	};

	criteria: {
		one: {
			method: "GET";
			params: { type: string; id: number };
			body: never;
			response: unknown;
		};
		update: {
			method: "PUT";
			params: { type: string; id: number };
			body: UpdateCriterionField.Request;
			response: OkResponse;
		};
		delete: {
			method: "DELETE";
			params: { type: string; id: number };
			body: never;
			response: OkResponse;
		};
	};

	pdf: {
		studentQuestion: {
			method: "GET";
			query: { student_id: number; question_id: number };
			body: never;
			response: unknown;
		};
		studentTest: {
			method: "GET";
			query: { student_id: number; test_id: number };
			body: never;
			response: unknown;
		};
	};
}

/**
 * API route constants for the bqool backend.
 *
 * This file is the ground-truth for all backend endpoints consumed by other repos
 * (frontend, runner, etc.). It must be kept in sync with bqool-backend controllers.
 *
 * All paths include the `/api` prefix. Parameterized routes are functions.
 *
 * @example
 *   fetch(API.classes.one(3))
 *   fetch(API.answers.ai.correctItem(5, 'concept', 12))
 */

const BASE = "/api";

export const API = {
	// ── Dashboard ────────────────────────────────────────────────────────────
	dashboard: `${BASE}/dashboard`,

	// ── Classes ──────────────────────────────────────────────────────────────
	classes: {
		list: `${BASE}/classes`,
		create: `${BASE}/classes`,
		one: (id: number) => `${BASE}/classes/${id}`,
		update: (id: number) => `${BASE}/classes/${id}`,
		delete: (id: number) => `${BASE}/classes/${id}`,
		students: {
			add: (classId: number) => `${BASE}/classes/${classId}/students`,
			remove: (classId: number, studentId: number) =>
				`${BASE}/classes/${classId}/students/${studentId}`,
		},
	},

	// ── Tests ────────────────────────────────────────────────────────────────
	tests: {
		list: `${BASE}/tests`,
		create: `${BASE}/tests`,
		one: (id: number) => `${BASE}/tests/${id}`,
		update: (id: number) => `${BASE}/tests/${id}`,
		delete: (id: number) => `${BASE}/tests/${id}`,
		detail: (id: number) => `${BASE}/tests/${id}/detail`,
		results: (id: number) => `${BASE}/tests/${id}/results`,
		questions: {
			add: (testId: number) => `${BASE}/tests/${testId}/questions`,
			update: (testId: number, questionId: number) =>
				`${BASE}/tests/${testId}/questions/${questionId}`,
			remove: (testId: number, questionId: number) =>
				`${BASE}/tests/${testId}/questions/${questionId}`,
		},
		students: {
			summary: (testId: number, studentId: number) =>
				`${BASE}/tests/${testId}/students/${studentId}`,
			grade: (testId: number, studentId: number) =>
				`${BASE}/tests/${testId}/students/${studentId}/grade`,
		},
	},

	// ── Questions ────────────────────────────────────────────────────────────
	questions: {
		list: `${BASE}/questions`,
		create: `${BASE}/questions`,
		one: (id: number) => `${BASE}/questions/${id}`,
		update: (id: number) => `${BASE}/questions/${id}`,
		delete: (id: number) => `${BASE}/questions/${id}`,
		gradeParams: (id: number) => `${BASE}/questions/${id}/grade-params`,
	},

	// ── Students ─────────────────────────────────────────────────────────────
	students: {
		one: (id: number) => `${BASE}/students/${id}`,
		tests: (id: number) => `${BASE}/students/${id}/tests`,
		nav: (id: number, questionId: number) =>
			`${BASE}/students/${id}/questions/${questionId}/nav`,
		answer: (id: number, questionId: number) =>
			`${BASE}/students/${id}/questions/${questionId}/answer`,
	},

	// ── Answers ──────────────────────────────────────────────────────────────
	answers: {
		create: `${BASE}/answers`,
		one: (id: number) => `${BASE}/answers/${id}`,
		protected: (id: number) => `${BASE}/answers/${id}/protected`,
		grade: (id: number) => `${BASE}/answers/${id}/grade`,
		bonus: (id: number) => `${BASE}/answers/${id}/bonus`,
		byStudent: `${BASE}/answers/by-student`,
		byTest: `${BASE}/answers/by-test`,
	},

	// ── Boolean answers ───────────────────────────────────────────────────────
	booleanAnswers: {
		init: `${BASE}/boolean-answers/init`,
		one: (booleanqId: number) => `${BASE}/boolean-answers/${booleanqId}`,
		review: (booleanqId: number) =>
			`${BASE}/boolean-answers/${booleanqId}/review`,
	},

	// ── Penmarks ──────────────────────────────────────────────────────────────
	penmarks: {
		create: `${BASE}/penmarks`,
	},

	// ── Rubric ────────────────────────────────────────────────────────────────
	rubric: {
		detail: `${BASE}/rubric/detail`,
		export: `${BASE}/rubric/export`,
		sync: `${BASE}/rubric/sync`,
	},

	criteria: {
		one: (type: string, id: number) => `${BASE}/criteria/${type}/${id}`,
		update: (type: string, id: number) => `${BASE}/criteria/${type}/${id}`,
		delete: (type: string, id: number) => `${BASE}/criteria/${type}/${id}`,
	},

	// ── PDF ───────────────────────────────────────────────────────────────────
	pdf: {
		studentQuestion: `${BASE}/pdf/student-question`,
		studentTest: `${BASE}/pdf/student-test`,
	},
} as const;
