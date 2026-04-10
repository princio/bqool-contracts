import type { Derived } from "@princio/bqool";

// ── RubricController (prefix: rubric/) ────────────────────────────

/** Gets full rubric detail for a question */
/** GET /rubric/:question_id */
export namespace RubricGet {
	export interface Params {
		question_id: number;
	}
	export type Response = Derived.Rubric;
}
