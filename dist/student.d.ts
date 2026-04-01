import type { Classroom, Question, Student, StudentTest, Test } from "@princio/bqool";
/** Gets a student detail */
/** GET /students/:id */
export declare namespace StudentGet {
    interface Response {
        student: Student;
        classroom: Classroom;
    }
}
/** Updates a student's name */
/** PUT /students/:id */
export declare namespace StudentUpdate {
    type Request = Partial<Omit<Student, "id">>;
}
/** Gets a student's tests overview */
/** GET /students/:id/tests */
export declare namespace StudentTestsOverview {
    interface Response {
        student: Student;
        classroom: Classroom;
        tests: {
            test: Test;
            student_test: StudentTest;
            questions: Question[];
        }[];
    }
}
