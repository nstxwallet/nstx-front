"use client";

import "reflect-metadata";
import {
	type User,
	getUser as getUserAPI,
	login as loginAPI,
	logout as logoutAPI,
	register as registerAPI,
} from "@/core";
import { BehaviorSubject } from "rxjs";
import { injectable } from "tsyringe";

interface LoginCredentials {
	email: string;
	password: string;
}

interface SignUpCredentials {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

interface Token {
	accessToken: string;
}

@injectable()
export class AuthService {
	private tokenSubject = new BehaviorSubject<Token | null>(null);
	public token = this.tokenSubject.asObservable();

	private userSubject = new BehaviorSubject<User | null>(null);
	public user = this.userSubject.asObservable();

	private authSubject = new BehaviorSubject<LoginCredentials | null>(null);
	private signupSubject = new BehaviorSubject<SignUpCredentials | null>(null);

	constructor() {
		console.log("AuthService initialized");
		this.initAuthSubscription();
		this.initSignupSubscription();
		this.initUserSubscription();

		if (typeof window !== "undefined") {
			const token = sessionStorage.getItem("token");
			if (token) {
				this.tokenSubject.next({ accessToken: token });
				this.getUser().catch((_e) => {
					this.tokenSubject.next(null);
				});
			}
		}
	}

	login(credentials: LoginCredentials) {
		this.authSubject.next(credentials);
	}

	logout() {
		this.logoutUser().then(() => {
			this.authSubject.next(null);
		});
	}

	signup(credentials: SignUpCredentials) {
		this.signupSubject.next(credentials);
	}

	private async logoutUser() {
		try {
			await logoutAPI();
			this.clearSession();
		} catch (_error) {
			this.clearSession();
		}
	}

	private async getUser() {
		try {
			const user = await getUserAPI();
			this.userSubject.next(user);
		} catch (_error) {
			this.userSubject.next(null);
		}
	}

	private initAuthSubscription() {
		this.authSubject.subscribe(async (credentials) => {
			if (credentials) {
				try {
					const token = await loginAPI(credentials);
					this.setToken(token);
					await this.getUser();
				} catch (_error) {
					this.clearSession();
				}
			}
		});
	}

	private initSignupSubscription() {
		this.signupSubject.subscribe(async (credentials) => {
			if (credentials) {
				try {
					const user = await registerAPI(credentials);
					this.userSubject.next(user);
				} catch (_error) {
					this.userSubject.next(null);
				}
			}
		});
	}

	private initUserSubscription() {
		this.tokenSubject.subscribe(async (token) => {
			if (token) {
				await this.getUser();
			} else {
				this.userSubject.next(null);
			}
		});
	}

	private setToken(accessToken: string) {
		this.tokenSubject.next({ accessToken });
		if (typeof window !== "undefined") {
			sessionStorage.setItem("token", accessToken);
		}
	}

	private clearSession() {
		this.tokenSubject.next(null);
		this.userSubject.next(null);
		if (typeof window !== "undefined") {
			sessionStorage.removeItem("token");
		}
	}
}
