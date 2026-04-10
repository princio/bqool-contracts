import type {
	Answer,
	Derived,
} from "@princio/bqool";
import { IdParams, OkResponse } from "./common";
import { AnswerByStudent } from "./answer";

// ── Answer Correction ──────────────────────────────────────────────

/** Gets full answer detail with correction data */
/** GET /answer/:id/detail */
export namespace AnswerCorrection {
	export type Params = IdParams;
	export interface Response extends Answer {
		correction: Derived.Correction;
	}
}