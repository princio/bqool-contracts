import type { Classroom } from "@princio/bqool/dist/classroom";
import type { Test } from "@princio/bqool/dist/test";
export interface ClassroomSummary {
    classroom: Classroom;
    tests: Test;
}
export interface ClassRoom_CreateRequest {
    name: string;
}
