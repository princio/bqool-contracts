// ── PdfController ─────────────────────────────────────────────────
//
// PDF endpoints return binary data (Content-Type: application/pdf, Buffer body),
// not JSON. They therefore have no Response type — only a Query describing
// the query parameters.

/** Generates a PDF of a single student's answer to a question */
export namespace PdfStudentQuestion {
	export const route = { method: 'GET', path: '/pdf/student-question' } as const;
	export interface Query {
		student_id: number;
		question_id: number;
	}
	// Response: binary PDF (Content-Type: application/pdf), no JSON body
}

/** Generates a PDF of a student's full test */
export namespace PdfStudentTest {
	export const route = { method: 'GET', path: '/pdf/student-test' } as const;
	export interface Query {
		student_id: number;
		test_id: number;
	}
	// Response: binary PDF (Content-Type: application/pdf), no JSON body
}
