import type { TestRef } from './test';
import type { Question } from './question';
import type { StudentSummary } from './student';
/** Minimal school class listing item */
export interface SchoolClassListItem {
    id: number;
    name: string;
}
export interface SchoolClassSummary {
    id: number;
    name: string;
    students_count: number;
    tests: (TestRef & {
        questions: Pick<Question, 'id' | 'name'>[];
    })[];
}
export interface SchoolClassDetail {
    id: number;
    name: string;
    students: StudentSummary[];
    tests: (TestRef & {
        questions_count: number;
    })[];
}
export interface CreateSchoolClassRequest {
    name: string;
}
