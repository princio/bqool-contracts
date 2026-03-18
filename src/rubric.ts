import type {
	BooleanQ,
	Criterion,
} from "@princio/bqool";

export type {
	BooleanQ,
	Criterion,
} from "@princio/bqool";

export interface RubricExportData {
	question_id: string;
	criteria: Criterion[];
	students: string[];
	answers: Record<string, string>;
}

// ── Request namespaces ──────────────────────────────────────────────

/** Creates a new rubric concept criterion */
export namespace RubricConceptCreate {
	export interface Request {
		name: string;
		definition: string;
	}
}

/** Creates a new boolean question linked to a criterion */
export namespace BooleanQCreate {
	export interface Request {
		criterion_type: string;
		criterion_id: number;
		text: string;
	}
}

/** Updates a boolean question's text */
export namespace BooleanQUpdate {
	export interface Request {
		text?: string;
	}
}

/** Creates a new expression criterion */
export namespace ExpressionCreate {
	export interface Request {
		name: string;
		type: string;
	}
}

/** Creates a new code criterion */
export namespace CodeCreate {
	export interface Request {
		expression: string;
		type: string;
	}
}

/** Creates a new error criterion */
export namespace ErrorCreate {
	export interface Request {
		name: string;
		description: string;
	}
}

/** Updates a single field on a criterion */
export namespace CriterionFieldUpdate {
	export interface Request {
		field: string;
		value: string | number;
	}
}

/** Creates a new criterion (generic, covers expression/code/error) */
export namespace CriterionCreate {
	export interface Request {
		name?: string;
		expression?: string;
		severity?: number;
		definition?: string;
		description?: string;
	}
}
