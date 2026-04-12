import type { BooleanQ } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── BooleanQController (prefix: booleanqs/) ───────────────────────

/** Lists boolean questions, optionally filtered */
export namespace BooleanQList {
	export const method = 'GET' as const;
	export const path = '/booleanq' as const;
	export interface Query {
		criterion_id?: number;
		question_id?: number;
	}
	export type Response = BooleanQ[];
}

/** Creates a new boolean question linked to a criterion */
export namespace BooleanQCreate {
	export const method = 'POST' as const;
	export const path = '/booleanq' as const;
	export interface Body extends Omit<BooleanQ, "id" | "criterion"> {
		criterion_id: number;
	}
	export type Response = OkIdResponse;
}

/** Deletes a boolean question */
export namespace BooleanQDelete {
	export const method = 'DELETE' as const;
	export const path = '/booleanq/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a boolean question's text */
export namespace BooleanQUpdateText {
	export const method = 'PATCH' as const;
	export const path = '/booleanq/:id/text' as const;
	export type Params = IdParams;
	export interface Body {
		text: string;
	}
	export type Response = OkResponse;
}
