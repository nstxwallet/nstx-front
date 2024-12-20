export interface User {
	id: string;
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
}

export interface Transaction {
	id: string;
	userId: string;
	status: string;
	type: string;
	amount: number;
	currency: string;
	createdAt: string;
	updatedAt: string;
	note?: string;
}

export interface Balance {
	id: string;
	userId: string;
	value: number;
	currency: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface Currency {
	id: string;
	name: string;
}

export interface UserMock {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	balances: Balance[];
	employmentType: string;
	experience: string;
	monthlyIncome: string;
	idCard: string;
	idRecord: string;
	validUntil: string;
	issueDate: string;
	issuingAuthority: string;
	taxNumber: string;
	registration: string;
	birthDate: string;
	isVerified: boolean;
}
