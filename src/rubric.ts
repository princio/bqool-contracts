import type { Derived } from "@princio/bqool";

// ── RubricController (prefix: rubric/) ────────────────────────────

/** Gets full rubric detail for a question */
export namespace RubricGet {
	export const route = { method: 'GET', path: '/rubric/:question_id' } as const;
	export interface Params {
		question_id: number;
	}
	export type Response = Derived.Rubric;
}
