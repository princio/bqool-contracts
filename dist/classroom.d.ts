import type { Classroom, Question, Student, Test } from "@princio/bqool";
/** Creates a new classroom */
/** POST /classroom */
export declare namespace ClassroomCreate {
    interface Request {
        name: string;
    }
}
/** Lists all classrooms */
/** GET /classroom */
export declare namespace ClassroomList {
    type Response = Classroom[];
}
/** Classroom detail with students and tests */
/** GET /classroom/:id */
export declare namespace ClassroomDetail {
    interface Response extends Classroom {
        students: Student[];
        tests: (Test & {
            questions_count: number;
        })[];
    }
}
/** Classroom summary with test/question tree */
/** GET /classroom/dashboard */
export declare namespace ClassroomSummary {
    type TestWithQuestion = Test & {
        questions: Pick<Question, "id" | "name">[];
    };
    type Response = (Classroom & {
        students_count: number;
        tests: TestWithQuestion[];
    })[];
}
/** Deletes a classroom */
/** DELETE /classroom/:id */
export declare namespace ClassroomDelete { }
/** Removes a student from a classroom */
/** DELETE /classroom/:id/students/:studentId */
export declare namespace ClassroomStudentRemove { }
