import type { BooleanQ } from "@princio/bqool";
/** Creates a new boolean question linked to a criterion */
/** POST /booleanqs */
export declare namespace BooleanQCreate {
    type Request = Omit<BooleanQ, "id">;
}
/** Updates a boolean question */
/** PATCH /booleanqs/:id */
export declare namespace BooleanQUpdate {
    type Request = Partial<Omit<BooleanQ, "id">>;
}
/** Deletes a boolean question */
/** DELETE /booleanqs/:id */
export declare namespace BooleanQDelete { }
