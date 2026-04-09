import type { Grid, GridIndicator } from "@princio/bqool";
import type { OkIdResponse, OkResponse } from "./common";

// ── GridController (prefix: grid/) ──────────────────────────────

/** Lists all grids */
/** GET /grid */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace GridList {
	export type Response = Grid[];
}

/** Gets a grid by id */
/** GET /grid/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace GridGet {
	export type Response = Grid;
}

/** Creates a new grid */
/** POST /grid */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace GridCreate {
	export interface Request {
		indicators: GridIndicator[];
	}
	export type Response = OkIdResponse;
}

/** Updates a grid */
/** PUT /grid/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace GridUpdate {
	export type Request = Partial<Omit<Grid, "id">>;
	export type Response = OkResponse;
}

/** Deletes a grid */
/** DELETE /grid/:id */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace GridDelete {
	export type Response = OkResponse;
}
