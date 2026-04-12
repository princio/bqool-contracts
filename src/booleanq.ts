import type { BooleanQ } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── BooleanQController (prefix: booleanqs/) ───────────────────────

/** Lists boolean questions for a criterion */
export namespace BooleanQList {
	export const route = { method: 'GET', path: '/booleanq/:criterionId' } as const;
	export interface Params {
		criterionId: number;
	}
	export type Response = BooleanQ[];
}

/** Creates a new boolean question linked to a criterion */
export namespace BooleanQCreate {
	export const route = { method: 'POST', path: '/booleanq' } as const;
	export interface Body extends Omit<BooleanQ, "id" | "criterion"> {
		criterion_id: number;
	}
	export type Response = OkIdResponse;
}

/** Deletes a boolean question */
export namespace BooleanQDelete {
	export const route = { method: 'DELETE', path: '/booleanq/:id' } as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a boolean question's text */
export namespace BooleanQUpdateText {
	export const route = { method: 'PATCH', path: '/booleanq/:id/text' } as const;
	export type Params = IdParams;
	export interface Body {
		text: string;
	}
	export type Response = OkResponse;
}
