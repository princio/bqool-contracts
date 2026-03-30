/** Creates a new classroom */
export declare namespace ClassRoomCreate {
    interface Request {
        name: string;
    }
}
/** GET /classes — list all classrooms */
export declare namespace ClassRoomList {
    interface Response {
        id: number;
        name: string;
    }
}
/** GET /classes/:id — classroom detail with students and tests */
export declare namespace ClassRoomDetail {
    interface Query {
        id: number;
    }
    interface Response {
        id: number;
        name: string;
        students: {
            id: number;
            name: string;
        }[];
        tests: {
            id: number;
            name: string;
            questions_count: number;
        }[];
    }
}
/** GET /dashboard — classroom summary with test/question tree */
export declare namespace ClassRoomSummary {
    interface Query {
        id: number;
    }
    interface Response {
        id: number;
        name: string;
        students_count: number;
        tests: {
            id: number;
            name: string;
            questions: {
                id: number;
                name: string;
            }[];
        }[];
    }
}
