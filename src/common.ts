
/** Response structure for simple success operations */
export interface OkResponse {
    ok: boolean;
}

/** Response structure for operations that return a created/updated resource ID */
export interface OkIdResponse {
    ok: boolean;
    id: number;
}

export interface IdParams {
    id: number;
}