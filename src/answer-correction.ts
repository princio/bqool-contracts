import type {
	Answer,
	Derived,
} from "@princio/bqool";
import { IdParams } from "./common";

// ── Answer Correction ──────────────────────────────────────────────

/** Gets answer with correction data */
export namespace AnswerCorrection {
	export const method = 'GET' as const;
	export const path = '/answer/:id/correction' as const;
	export type Params = IdParams;
	export type Response =Derived.Correction;
}
