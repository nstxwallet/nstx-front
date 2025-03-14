import "reflect-metadata";
import { BehaviorSubject, EMPTY, type Observable, from, of } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";
import { inject, injectable } from "tsyringe";

import {
  type Balance,
  type User,
  createUserBalance as createBalanceAPI,
  getUserBalance as getBalanceAPI,
  getUserBalances as getBalancesAPI,
} from "@/core";

@injectable()
export class BalanceService {
  private readonly balancesSubject = new BehaviorSubject<Balance[]>([]);
  public balances = this.balancesSubject.asObservable();

  private readonly balanceSubject = new BehaviorSubject<Balance | null>(null);
  public balance = this.balanceSubject.asObservable();

  constructor(@inject("UserStream") private readonly _user$: Observable<User | null>) {
    this.initBalancesSubscription();
  }

  private initBalancesSubscription(): void {
    this._user$
      .pipe(
        switchMap((user) => {
          if (!user) {
            return of([]);
          }
          return from(getBalancesAPI({ userId: user.id })).pipe(
            tap((balances) => this.balancesSubject.next(balances)),
            catchError(() => of([])),
          );
        }),
      )
      .subscribe();
  }

  fetchBalances(): void {
    this._user$
      .pipe(
        switchMap((user) => {
          if (!user) {
            return of([]);
          }
          return from(getBalancesAPI({ userId: user.id })).pipe(
            tap((balances) => this.balancesSubject.next(balances)),
            catchError(() => of([])),
          );
        }),
      )
      .subscribe();
  }

  fetchBalance(id: string): void {
    this._user$
      .pipe(
        switchMap((user) => {
          if (!user) {
            return of(null);
          }
          return from(getBalanceAPI({ userId: user.id, id })).pipe(
            tap((balance) => this.balanceSubject.next(balance)),
            catchError(() => of(null)),
          );
        }),
      )
      .subscribe();
  }

  createBalance(currency: string): Observable<Balance> {
    return from(createBalanceAPI({ currency }) as Promise<Balance>).pipe(
      tap((newBalance: Balance) => {
        const currentBalances = this.balancesSubject.getValue();
        this.balancesSubject.next([...currentBalances, newBalance]);
      }),
      catchError(() => EMPTY),
    );
  }
}
