export interface Profile {
	type: number;
	stage: number;
	roles: any[];
}

export interface User {
	id: string;
	email: string;
	token: string;
	profiles: Profile[];
}