import type { Penmark } from "@princio/bqool";
import type { IdParams, OkResponse } from "./common";

// ── PenmarkController (prefix: penmark/) ────────────────────────

/** Lists penmarks for an answer */
/** GET /penmark?answer_id=:answerId */
export namespace PenmarkList {
	export interface Query {
		answer_id: number;
	}
	export type Response = Penmark[];
}

/** Creates a new penmark annotation */
/** POST /penmark */
export namespace PenmarkCreate {
	export interface Request extends Omit<Penmark, "id" | "answer"> {
		answer_id: number;
	}
	export interface Response {
		ok: boolean;
		penmark: Penmark;
	}
}

/** Updates a penmark annotation */
/** PATCH /penmark/:id */
export namespace PenmarkUpdate {
	export type Params = IdParams;
	export type Request = Partial<Omit<Penmark, "id" | "answer">>;
	export type Response = OkResponse;
}

/** Deletes a penmark annotation */
/** DELETE /penmark/:id */
export namespace PenmarkDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}
