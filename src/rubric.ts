import type { Derived } from "@princio/bqool";

// ── RubricController (prefix: rubric/) ────────────────────────────

/** Gets rubric for a question */
export namespace RubricGet {
	export const method = 'GET' as const;
	export const path = '/rubric/:question_id' as const;
	export interface Params {
		question_id: number;
	}
	export type Response = Derived.Rubric;
}
