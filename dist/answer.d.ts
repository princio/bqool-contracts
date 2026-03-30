import type { AnswerPenmark, AnswerBooleanQ, Criterion } from "@princio/bqool";
/** Concept enriched with derived evaluation state from AnswerBooleanQs */
export interface AnswerCriterion extends Criterion {
    booleanq_answers: AnswerBooleanQ[];
}
/** Initializes answer boolean-q evaluations for a student-question pair */
export declare namespace AnswerInit {
    interface Response {
        ok: boolean;
        created: {
            criteria: number;
            boolean_answers: number;
        };
    }
}
/** Creates a new penmark annotation on an answer */
export declare namespace PenmarkCreate {
    interface Response {
        ok: boolean;
        penmark: AnswerPenmark;
    }
}
/** Toggles the protection status of an answer */
export declare namespace AnswerToggleProtection {
    interface Response {
        ok: boolean;
        protected: number;
    }
}
/** Creates answers in batch for a test */
export declare namespace AnswerBatchCreate {
    interface Response {
        ok: boolean;
        created: number;
    }
}
/** Resets answers in batch for a test */
export declare namespace AnswerBatchReset {
    interface Response {
        ok: boolean;
        reset: number;
    }
}
/** Checks the workdir status for an answer */
export declare namespace AnswerWorkdirStatus {
    interface Response {
        workdir_mtime: string | null;
        output_mtime: string | null;
    }
}
/** Recreates the workdir for an answer */
export declare namespace AnswerRecreateWorkdir {
    interface Response {
        ok: boolean;
        workdir: string;
    }
}
/** Updates an answer's text or blank status */
export declare namespace AnswerUpdate {
    interface Request {
        text?: string;
        blank?: boolean;
    }
}
/** Sets the grade for an answer */
export declare namespace AnswerSetGrade {
    interface Request {
        grade: number;
    }
}
/** Sets the bonus for an answer */
export declare namespace AnswerSetBonus {
    interface Request {
        bonus: number | null;
    }
}
/** Upserts a boolean-question answer with optional citations and rationale */
export declare namespace BooleanQAnswerUpsert {
    interface Request {
        answer?: boolean;
        citations?: string[];
        rationale?: string;
    }
}
