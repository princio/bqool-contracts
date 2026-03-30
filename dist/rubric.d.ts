import type { Criterion } from "@princio/bqool";
export type { BooleanQ, Criterion, } from "@princio/bqool";
export interface RubricExportData {
    question_id: string;
    criteria: Criterion[];
    students: string[];
    answers: Record<string, string>;
}
/** Creates a new rubric concept criterion */
export declare namespace RubricConceptCreate {
    interface Request {
        name: string;
        definition: string;
    }
}
/** Creates a new boolean question linked to a criterion */
export declare namespace BooleanQCreate {
    interface Request {
        criterion_type: string;
        criterion_id: number;
        text: string;
    }
}
/** Updates a boolean question's text */
export declare namespace BooleanQUpdate {
    interface Request {
        text?: string;
    }
}
/** Creates a new expression criterion */
export declare namespace ExpressionCreate {
    interface Request {
        name: string;
        type: string;
    }
}
/** Creates a new code criterion */
export declare namespace CodeCreate {
    interface Request {
        expression: string;
        type: string;
    }
}
/** Creates a new error criterion */
export declare namespace ErrorCreate {
    interface Request {
        name: string;
        description: string;
    }
}
/** Updates a single field on a criterion */
export declare namespace CriterionFieldUpdate {
    interface Request {
        field: string;
        value: string | number;
    }
}
/** Creates a new criterion (generic, covers expression/code/error) */
export declare namespace CriterionCreate {
    interface Request {
        name?: string;
        expression?: string;
        severity?: number;
        definition?: string;
        description?: string;
    }
}
