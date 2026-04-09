import type { Penmark } from "@princio/bqool";
import type { OkResponse } from "./common";

// ── PenmarkController (prefix: penmark/) ────────────────────────

/** Creates a new penmark annotation */
/** POST /penmark */
/** @since 0.1.0 */
export namespace PenmarkCreate {
	export interface Request extends Omit<Penmark, "id"> {
		answer_id: number;
	}
	export interface Response {
		ok: boolean;
		penmark: Penmark;
	}
}

/** Lists penmarks for an answer */
/** GET /penmark?answer_id=:answerId */
/** @since 0.2.0 */
export namespace PenmarkList {
	export type Response = Penmark[];
}

/** Updates a penmark annotation */
/** PATCH /penmark/:id */
/** @since 0.2.0 */
export namespace PenmarkUpdate {
	export type Request = Partial<Omit<Penmark, "id">>;
	export type Response = OkResponse;
}

/** Deletes a penmark annotation */
/** DELETE /penmark/:id */
/** @since 0.2.0 */
export namespace PenmarkDelete {
	export type Response = OkResponse;
}
