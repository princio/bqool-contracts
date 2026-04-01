import type { BooleanQ } from "@princio/bqool";

// ── BooleanQController (prefix: booleanqs/) ───────────────────────

/** Creates a new boolean question linked to a criterion */
/** POST /booleanqs */
export namespace BooleanQCreate {
	export type Request = Omit<BooleanQ, "id">;
}

/** Updates a boolean question */
/** PATCH /booleanqs/:id */
export namespace BooleanQUpdate {
	export type Request = Partial<Omit<BooleanQ, "id">>;
}

/** Deletes a boolean question */
/** DELETE /booleanqs/:id */
export namespace BooleanQDelete {}
