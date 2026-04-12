import type { Classroom, Test } from "@princio/bqool";
import type { IdParams, OkIdResponse, OkResponse } from "./common";

// ── ClassroomController (prefix: classroom) ───────────────────────

/** Lists all classrooms */
export namespace ClassroomList {
	export const method = 'GET' as const;
	export const path = '/classroom' as const;
	export type Response = Classroom[];
}

/** Gets a single classroom by ID */
export namespace ClassroomGet {
	export const method = 'GET' as const;
	export const path = '/classroom/:id' as const;
	export type Params = IdParams;
	export type Response = Classroom;
}

/** Creates a new classroom */
export namespace ClassroomCreate {
	export const method = 'POST' as const;
	export const path = '/classroom' as const;
	export interface Body {
		name: string;
	}
	export type Response = OkIdResponse;
}

/** Updates a classroom */
export namespace ClassroomUpdate {
	export const method = 'PUT' as const;
	export const path = '/classroom/:id' as const;
	export type Params = IdParams;
	export type Body = Omit<Classroom, "id" | "students">;
	export type Response = OkResponse;
}

/** Deletes a classroom */
export namespace ClassroomDelete {
	export const method = 'DELETE' as const;
	export const path = '/classroom/:id' as const;
	export type Params = IdParams;
	export type Response = OkResponse;
}

// ── Queries ─────────────────────────────────────────────────────

/** Classroom summary with test/question tree */
export namespace ClassroomDashboard {
	export const method = 'GET' as const;
	export const path = '/classroom/:classroom_id/dashboard' as const;
	export type Response = (Classroom & { tests: Test[] });
}


