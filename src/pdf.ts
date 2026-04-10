// ── PdfController ─────────────────────────────────────────────────
//
// PDF endpoints return binary data (Content-Type: application/pdf, Buffer body),
// not JSON. They therefore have no Response type — only a Query describing
// the query parameters.

/** Generates a PDF of a single student's answer to a question */
/** GET /pdf/student-question?student_id=:studentId&question_id=:questionId */
export namespace PdfStudentQuestion {
	export interface Query {
		student_id: number;
		question_id: number;
	}
	// Response: binary PDF (Content-Type: application/pdf), no JSON body
}

/** Generates a PDF of a student's full test */
/** GET /pdf/student-test?student_id=:studentId&test_id=:testId */
export namespace PdfStudentTest {
	export interface Query {
		student_id: number;
		test_id: number;
	}
	// Response: binary PDF (Content-Type: application/pdf), no JSON body
}
