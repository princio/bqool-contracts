import type { BooleanQ } from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

// ── BooleanQController (prefix: booleanqs/) ───────────────────────

/** Lists boolean questions for a criterion */
/** GET /booleanq/:criterionId */
/** @since 0.1.0 */
export namespace BooleanQList {
	export type Response = BooleanQ[];
}

/** Creates a new boolean question linked to a criterion */
/** POST /booleanq */
/** @since 0.1.0 */
export namespace BooleanQCreate {
	export interface Request extends Omit<BooleanQ, "id"> {
		criterion_id: number;
	}
	export type Response = OkIdResponse;
}

/** Updates a boolean question */
/** PATCH /booleanq/:id */
/** @since 0.1.0 */
export namespace BooleanQUpdate {
	export type Request = Partial<Omit<BooleanQ, "id">>;
	export type Response = OkResponse;
}

/** Deletes a boolean question */
/** DELETE /booleanq/:id */
/** @since 0.1.0 */
export namespace BooleanQDelete {
	export type Response = OkResponse;
}
