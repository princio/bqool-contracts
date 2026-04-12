import type { Grid, GridIndicator } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── GridController (prefix: grid/) ─────────────────────────────

/** Lists all grids */
export namespace GridList {
	export const method = 'GET' as const;
	export const path = '/grid' as const;
	export type Response = Grid[];
}

/** Gets a grid by id */
export namespace GridGet {
	export const method = 'GET' as const;
	export const path = '/grid/:id' as const;
	export type Params = IdParams;
	export type Response = Grid;
}

/** Creates a new grid */
export namespace GridCreate {
	export const method = 'POST' as const;
	export const path = '/grid' as const;
	export interface Body {
		indicators: GridIndicator[];
	}
	export type Response = OkIdResponse;
}

/** Deletes a grid */
export namespace GridDelete {
	export const method = 'DELETE' as const;
	export const path = '/grid/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a grid's indicators */
export namespace GridUpdateIndicators {
	export const method = 'PATCH' as const;
	export const path = '/grid/:id/indicators' as const;
	export type Params = IdParams;
	export interface Body {
		indicators: GridIndicator[];
	}
	export type Response = OkResponse;
}
