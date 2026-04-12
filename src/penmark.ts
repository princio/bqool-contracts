import type { Penmark } from "@princio/bqool";
import type { IdParams, OkResponse } from "./common";

// ── PenmarkController (prefix: penmark/) ────────────────────────

/** Lists penmarks for an answer */
export namespace PenmarkList {
	export const method = 'GET' as const;
	export const path = '/penmark' as const;
	export interface Query {
		answer_id: number;
	}
	export type Response = Penmark[];
}

/** Creates a new penmark annotation */
export namespace PenmarkCreate {
	export const method = 'POST' as const;
	export const path = '/penmark' as const;
	export interface Body extends Omit<Penmark, "id" | "answer"> {
		answer_id: number;
	}
	export interface Response {
		ok: boolean;
		penmark: Penmark;
	}
}

/** Updates a penmark annotation */
export namespace PenmarkUpdate {
	export const method = 'PATCH' as const;
	export const path = '/penmark/:id' as const;
	export type Params = IdParams;
	export type Body = Partial<Omit<Penmark, "id" | "answer">>;
	export type Response = OkResponse;
}

/** Deletes a penmark annotation */
export namespace PenmarkDelete {
	export const method = 'DELETE' as const;
	export const path = '/penmark/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}
