import type { Grid, GridIndicator } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── GridController (prefix: grid/) ─────────────────────────────

/** Lists all grids */
export namespace GridList {
	export const route = { method: 'GET', path: '/grid' } as const;
	export type Response = Grid[];
}

/** Gets a grid by id */
export namespace GridGet {
	export const route = { method: 'GET', path: '/grid/:id' } as const;
	export type Params = IdParams;
	export type Response = Grid;
}

/** Creates a new grid */
export namespace GridCreate {
	export const route = { method: 'POST', path: '/grid' } as const;
	export interface Body {
		indicators: GridIndicator[];
	}
	export type Response = OkIdResponse;
}

/** Deletes a grid */
export namespace GridDelete {
	export const route = { method: 'DELETE', path: '/grid/:id' } as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Specific mutations ──────────────────────────────────────────

/** Updates a grid's indicators */
export namespace GridUpdateIndicators {
	export const route = { method: 'PATCH', path: '/grid/:id/indicators' } as const;
	export type Params = IdParams;
	export interface Body {
		indicators: GridIndicator[];
	}
	export type Response = OkResponse;
}
