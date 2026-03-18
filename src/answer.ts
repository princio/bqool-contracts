import type {
	AnswerPenmark,
	AnswerBooleanQ,
	Criterion,
} from "@princio/bqool";

// ── Derived correction items (rubric item + AnswerBooleanQ evaluation) ──

/** Concept enriched with derived evaluation state from AnswerBooleanQs */
export interface AnswerCriterion extends Criterion {
	booleanq_answers: AnswerBooleanQ[];
}

/** Initializes answer boolean-q evaluations for a student-question pair */
export namespace AnswerInit {
	export interface Response {
		ok: boolean;
		created: { criteria: number; boolean_answers: number };
	}
}

/** Creates a new penmark annotation on an answer */
export namespace PenmarkCreate {
	export interface Response {
		ok: boolean;
		penmark: AnswerPenmark;
	}
}

/** Toggles the protection status of an answer */
export namespace AnswerToggleProtection {
	export interface Response {
		ok: boolean;
		protected: number;
	}
}

/** Creates answers in batch for a test */
export namespace AnswerBatchCreate {
	export interface Response {
		ok: boolean;
		created: number;
	}
}

/** Resets answers in batch for a test */
export namespace AnswerBatchReset {
	export interface Response {
		ok: boolean;
		reset: number;
	}
}

/** Checks the workdir status for an answer */
export namespace AnswerWorkdirStatus {
	export interface Response {
		workdir_mtime: string | null;
		output_mtime: string | null;
	}
}

/** Recreates the workdir for an answer */
export namespace AnswerRecreateWorkdir {
	export interface Response {
		ok: boolean;
		workdir: string;
	}
}

// ── Request/Response namespaces ─────────────────────────────────────

/** Updates an answer's text or blank status */
export namespace AnswerUpdate {
	export interface Request {
		text?: string;
		blank?: boolean;
	}
}

/** Sets the grade for an answer */
export namespace AnswerSetGrade {
	export interface Request {
		grade: number;
	}
}

/** Sets the bonus for an answer */
export namespace AnswerSetBonus {
	export interface Request {
		bonus: number | null;
	}
}

/** Upserts a boolean-question answer with optional citations and rationale */
export namespace BooleanQAnswerUpsert {
	export interface Request {
		answer?: boolean;
		citations?: string[];
		rationale?: string;
	}
}
