import type { BooleanQ } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── BooleanQController (prefix: booleanqs/) ───────────────────────

/** Lists boolean questions for a criterion */
/** GET /booleanq/:criterionId */
export namespace BooleanQList {
	export interface Params {
		criterionId: number;
	}
	export type Response = BooleanQ[];
}

/** Creates a new boolean question linked to a criterion */
/** POST /booleanq */
export namespace BooleanQCreate {
	export interface Request extends Omit<BooleanQ, "id" | "criterion"> {
		criterion_id: number;
	}
	export type Response = OkIdResponse;
}

/** Deletes a boolean question */
/** DELETE /booleanq/:id */
export namespace BooleanQDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────��───────────

/** Updates a boolean question's text */
/** PATCH /booleanq/:id/text */
export namespace BooleanQUpdateText {
	export type Params = IdParams;
	export interface Request {
		text: string;
	}
	export type Response = OkResponse;
}
