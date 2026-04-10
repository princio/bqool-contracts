import type { Grid, GridIndicator } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── GridController (prefix: grid/) ─────────────────────��────────

/** Lists all grids */
/** GET /grid */
export namespace GridList {
	export type Response = Grid[];
}

/** Gets a grid by id */
/** GET /grid/:id */
export namespace GridGet {
	export type Params = IdParams;
	export type Response = Grid;
}

/** Creates a new grid */
/** POST /grid */
export namespace GridCreate {
	export interface Request {
		indicators: GridIndicator[];
	}
	export type Response = OkIdResponse;
}

/** Deletes a grid */
/** DELETE /grid/:id */
export namespace GridDelete {
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a grid's indicators */
/** PATCH /grid/:id/indicators */
export namespace GridUpdateIndicators {
	export type Params = IdParams;
	export interface Request {
		indicators: GridIndicator[];
	}
	export type Response = OkResponse;
}
