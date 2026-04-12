import type {
	Answer,
	CoherenceLevels,
	FormatLevels,
} from "@princio/bqool";
import { IdParams, OkIdResponse, OkResponse } from "./common";

// ── AnswerController (prefix: answers) ────────────────────────────

/** Lists all answers */
export namespace AnswerList {
	export const route = { method: 'GET', path: '/answer' } as const;
	export type Response = Answer[];
}

/** Gets a single answer by ID */
export namespace AnswerGet {
	export const route = { method: 'GET', path: '/answer/:id' } as const;
	export type Params = IdParams;
	export type Response = Answer;
}

/** Creates a single answer */
export namespace AnswerCreate {
	export const route = { method: 'POST', path: '/answer' } as const;
	export interface Query {
		student_id: number;
		question_id: number;
	}
	export type Body = Omit<Answer, "id" | "student" | "question">;
	export type Response = OkIdResponse;
}

/** Deletes an answer */
export namespace AnswerDelete {
	export const route = { method: 'DELETE', path: '/answer/:id' } as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Gets an answer by student and question */
export namespace AnswerByStudent {
	export const route = { method: 'GET', path: '/answer/by-student/:student_id' } as const;
	export interface Params {
		student_id: number;
	}
	export type Query = { question_id: number } | { test_id: number };
	export type Response = Answer;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates an answer's text */
export namespace AnswerUpdateText {
	export const route = { method: 'PATCH', path: '/answer/:id/text' } as const;
	export type Params = IdParams;
	export interface Body {
		text: string;
	}
	export type Response = OkResponse;
}

/** Updates an answer's blank status */
export namespace AnswerUpdateBlank {
	export const route = { method: 'PATCH', path: '/answer/:id/blank' } as const;
	export type Params = IdParams;
	export interface Body {
		is_blank: boolean;
	}
	export type Response = OkResponse;
}

/** Updates an answer's format assessment */
export namespace AnswerUpdateFormat {
	export const route = { method: 'PATCH', path: '/answer/:id/format' } as const;
	export type Params = IdParams;
	export interface Body {
		level: FormatLevels | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}

/** Toggles the protection status of an answer */
export namespace AnswerToggleProtection {
	export const route = { method: 'PATCH', path: '/answer/:id/protected' } as const;
	export type Params = IdParams;
	export interface Body {
		protected: boolean;
	}
	export interface Response {
		ok: boolean;
		is_locked: boolean;
	}
}

/** Sets the grade for an answer */
export namespace AnswerSetGrade {
	export const route = { method: 'PATCH', path: '/answer/:id/grade' } as const;
	export type Params = IdParams;
	export interface Body {
		grade?: number;
		rational?: string;
	}
	export type Response = OkResponse;
}

/** Updates the coherence assessment for an answer */
export namespace AnswerSetCoherence {
	export const route = { method: 'PATCH', path: '/answer/:id/coherence' } as const;
	export type Params = IdParams;
	export interface Body {
		level?: CoherenceLevels;
		rationale?: string;
	}
	export type Response = OkResponse;
}
