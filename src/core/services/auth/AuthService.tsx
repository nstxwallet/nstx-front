"use client";

import "reflect-metadata";
import { BehaviorSubject, type Observable, catchError, from, tap } from "rxjs";
import { injectable } from "tsyringe";

import {
  type User,
  getUser as getUserAPI,
  login as loginAPI,
  logout as logoutAPI,
  register as registerAPI,
} from "@/core";
import next from "next";

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

  public signupObservable = this.signupSubject.asObservable();

  constructor() {
    this.initUserSubscription();
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("token");
      if (token) {
        this.tokenSubject.next({ accessToken: token });
        this.getUser();
      }
    }
  }

  login(credentials: LoginCredentials) {
    this.authSubject.next(credentials);
  }

  signup(credentials: SignUpCredentials) {
    this.signupSubject.next(credentials);
  }

  logout() {
    return from(logoutAPI()).pipe(
      tap(() => {
        this.clearSession();
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  getUser() {
    return from(getUserAPI()).pipe(
      tap((user) => {
        this.userSubject.next(user);
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  loginUser(credentials: LoginCredentials): Observable<void> {
    return from(loginAPI(credentials)).pipe(
      tap({
        next: (token) => {
          this.setToken(token);
        },
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  signupUser(credentials: SignUpCredentials): Observable<void> {
    return from(registerAPI(credentials)).pipe(
      tap({
        next: () => {
          this.signup(credentials);
        },
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  private initUserSubscription() {
    this.tokenSubject.subscribe(async (token) => {
      if (token) {
        await this.getUser().subscribe();
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
