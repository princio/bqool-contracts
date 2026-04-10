import type {
	Answer,
	CoherenceLevels,
	FormatLevels,
} from "@princio/bqool";
import { IdParams, OkIdResponse, OkResponse } from "./common";

// ── AnswerController (prefix: answers) ────────────────────────────

/** Lists all answers */
/** GET /answer */
export namespace AnswerList {
	export type Response = Answer[];
}

/** Creates a single answer */
/** POST /answer?student_id=:studentId&question_id=:questionId */
export namespace AnswerCreate {
	export interface Query {
		student_id: number;
		question_id: number;
	}
	export type Request = Omit<Answer, "id" | "student" | "question">;
	export type Response = OkIdResponse;
}

/** Deletes an answer */
/** DELETE /answer/:id */
export namespace AnswerDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Gets an answer by student and question */
/** GET /answer/by-student/:student_id */
export namespace AnswerByStudent {
	export interface Params {
		student_id: number;
	}
	export type Query = { question_id: number } | { test_id: number };
	export type Response = Answer;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates an answer's text */
/** PATCH /answer/:id/text */
export namespace AnswerUpdateText {
	export type Params = IdParams;
	export interface Request {
		text: string;
	}
	export type Response = OkResponse;
}

/** Updates an answer's blank status */
/** PATCH /answer/:id/blank */
export namespace AnswerUpdateBlank {
	export type Params = IdParams;
	export interface Request {
		is_blank: boolean;
	}
	export type Response = OkResponse;
}

/** Updates an answer's format assessment */
/** PATCH /answer/:id/format */
export namespace AnswerUpdateFormat {
	export type Params = IdParams;
	export interface Request {
		level: FormatLevels | null;
		rationale: string | null;
	}
	export type Response = OkResponse;
}

/** Toggles the protection status of an answer */
/** PATCH /answer/:id/protected */
export namespace AnswerToggleProtection {
	export type Params = IdParams;
	export interface Request {
		protected: boolean;
	}
	export interface Response {
		ok: boolean;
		is_locked: boolean;
	}
}

/** Sets the grade for an answer */
/** PATCH /answer/:id/grade */
export namespace AnswerSetGrade {
	export type Params = IdParams;
	export interface Request {
		grade?: number;
		rational?: string;
	}
	export type Response = OkResponse;
}

/** Updates the coherence assessment for an answer */
/** PATCH /answer/:id/coherence */
export namespace AnswerSetCoherence {
	export type Params = IdParams;
	export interface Request {
		level?: CoherenceLevels;
		rationale?: string;
	}
	export type Response = OkResponse;
}
