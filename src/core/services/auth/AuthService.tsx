"use client";

import "reflect-metadata";
import { BehaviorSubject, from, Subscription, catchError, tap } from "rxjs";
import { injectable } from "tsyringe";

import {
  type User,
  getUser as getUserAPI,
  login as loginAPI,
  logout as logoutAPI,
  register as registerAPI,
} from "@/core";

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

  private userSubscription: Subscription | null | undefined = null;

  constructor() {
    this.initUserSubscription();
    const token = typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

    if (token) {
      this.setToken(token);
    }
  }

  loginUser(credentials: LoginCredentials) {
    return from(loginAPI(credentials)).pipe(
      tap((token) => this.setToken(token)),
      catchError((error) => {
        console.error("Login failed:", error);
        throw error;
      }),
    );
  }

  signupUser(credentials: SignUpCredentials) {
    return from(registerAPI(credentials)).pipe(
      tap(() => this.getUser()), // Получаем пользователя после регистрации
      catchError((error) => {
        console.error("Signup failed:", error);
        throw error;
      }),
    );
  }

  logout() {
    return from(logoutAPI()).pipe(
      tap(() => this.clearSession()),
      catchError((error) => {
        console.error("Logout failed:", error);
        throw error;
      }),
    );
  }

  private getUser() {
    if (this.userSubject.value) return;

    return from(getUserAPI())
      .pipe(
        tap((user) => this.userSubject.next(user)),
        catchError((error) => {
          this.userSubject.next(null);
          console.error("Failed to fetch user:", error);
          throw error;
        }),
      )
      .subscribe();
  }

  private initUserSubscription() {
    this.tokenSubject.subscribe((token) => {
      this.userSubscription?.unsubscribe(); // Отписываемся от старой подписки
      if (token) {
        this.userSubscription = this.getUser();
      } else {
        this.userSubject.next(null);
      }
    });
  }

  private setToken(accessToken: string) {
    if (this.tokenSubject.value?.accessToken !== accessToken) {
      this.tokenSubject.next({ accessToken });

      if (typeof window !== "undefined" && sessionStorage.getItem("token") !== accessToken) {
        sessionStorage.setItem("token", accessToken);
      }
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
