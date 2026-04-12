import type {
	Answer,
	Derived,
} from "@princio/bqool";
import { IdParams } from "./common";

// ── Answer Correction ──────────────────────────────────────────────

/** Gets full answer detail with correction data */
export namespace AnswerCorrection {
	export const route = { method: 'GET', path: '/answer/:id/correction' } as const;
	export type Params = IdParams;
	export interface Response extends Answer {
		correction: Derived.Correction;
	}
}
