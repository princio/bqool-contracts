/** Creates a new classroom */
export namespace ClassroomCreate {
	export interface Request {
		name: string;
	}
}

/** GET /classes — list all classrooms */
export namespace ClassroomList {
	export interface Response {
		id: number;
		name: string;
	}
}

/** GET /classes/:id — classroom detail with students and tests */
export namespace ClassroomDetail {
	export interface Query {
		id: number;
	}
	export interface Response {
		id: number;
		name: string;
		students: { id: number; name: string }[];
		tests: { id: number; name: string; questions_count: number }[];
	}
}

/** GET /dashboard — classroom summary with test/question tree */
export namespace ClassroomSummary {
	export interface Query {
		id: number;
	}
	export interface Response {
		id: number;
		name: string;
		students_count: number;
		tests: {
			id: number;
			name: string;
			questions: { id: number; name: string }[];
		}[];
	}
}
