import { Student } from "@princio/bqool/dist/student";
import type { AnswerDetail } from "./answer";
import type { TestListItem, TestRef } from "./test";
export interface StudentTest {
    student: Student;
    test: TestRef;
    classroom: ClassRoomDetail;
    student: StudentSummary;
    questions: {
        question_id: number;
        question_name: string;
        score: null;
    }[];
    media: null;
    fascia: null;
}
export interface StudentTestsData {
    student: StudentSummary;
    classroom: ClassRoomDetail;
    tests: {
        id: number;
        name: string;
        questions: {
            id: number;
            name: string;
            score: null;
            word_count: number;
            isblank: boolean;
            has_answer: boolean;
        }[];
        media: number | null;
        fascia: null;
    }[];
}
export interface StudentTestAnswersData {
    test: TestListItem;
    student: StudentSummary;
    final_grade: number | null;
    answers: {
        question_id: number;
        question_name: string;
        question_text: string;
        question_number: number | null;
        answer: AnswerDetail | null;
    }[];
}
export interface AddStudentRequest {
    name: string;
}
