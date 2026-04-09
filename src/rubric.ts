import type { Derived } from "@princio/bqool";

// ── RubricController (prefix: rubric/) ────────────────────────────

/** Gets full rubric detail for a question */
/** GET /rubric/:question_id */
/** @since 0.1.0 */
export namespace Rubric {
	export type Response = Derived.Rubric;
}
