/** Shape of a single rubric item in a population confirm payload */
export interface PopulationItemPayload {
    name?: string;
    expression?: string;
    definition?: string;
    description?: string;
    severity?: number;
    booleanqs?: {
        text: string;
    }[];
}
/** Raw JSON output shape written by Claude to output/population.json */
export interface PopulationJsonOutput {
    concepts?: unknown[];
    expressions?: unknown[];
    code?: unknown[];
    errors?: unknown[];
}
export interface PopulationReviewData {
    question_id: number;
    population_id: string;
    concepts: unknown[];
    expressions: unknown[];
    code: unknown[];
    errors: unknown[];
}
export interface ConfirmPopulationResult {
    executed: number;
    errors: string[];
}
export interface PopulationListItem {
    id: string;
    path: string;
    has_output: boolean;
}
/** Creates a new rubric population from AI output */
/** POST /rubric-draft/batch/:itemType/run */
export declare namespace PopulationCreate {
    interface Request {
        question_id: number;
        model?: string;
        studentIds?: number[];
    }
    interface Response {
        id: string;
        path: string;
        relativePath: string;
        question_id: number;
    }
}
/** Gets rubric draft batch status */
/** GET /rubric-draft/batch/:itemType/status?batch_id=:batchId */
export declare namespace RubricDraftStatus {
    interface Response {
        id: number;
        question_id: number | null;
        item_type: string | null;
        phase: "running" | "done" | "partial";
        total: number;
        completed: number;
        running: number;
        failed: number;
        children: unknown[];
    }
}
/** Stops a rubric draft batch */
/** POST /rubric-draft/batch/:itemType/stop */
export declare namespace RubricDraftStop { }
/** Creates a merge workdir for rubric draft output */
/** POST /rubric-draft/batch/:itemType/merge-workdir */
export declare namespace RubricDraftMergeWorkdir {
    interface Request {
        question_id: number;
    }
    interface Response {
        workdir: string;
        relativePath: string;
    }
}
/** Gets the merge status for a rubric draft */
/** GET /rubric-draft/batch/:itemType/merge-status?question_id=:questionId */
export declare namespace RubricDraftMergeStatus {
    interface Response {
        hasMergeWorkdir: boolean;
        hasOutput: boolean;
        relativePath?: string;
    }
}
/** Imports the merged rubric draft output */
/** POST /rubric-draft/batch/:itemType/import-merge */
export declare namespace RubricDraftImportMerge {
    interface Request {
        question_id: number;
    }
    interface Response {
        population_id: string;
    }
}
