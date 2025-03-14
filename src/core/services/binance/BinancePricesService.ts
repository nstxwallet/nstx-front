import { BehaviorSubject, from, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { injectable } from "tsyringe";

import { type Price, getTickerPrice } from "@/core";

@injectable()
export class BinanceService {
  private readonly pricesSubject = new BehaviorSubject<Price[] | null>(null);
  public prices$ = this.pricesSubject.asObservable();

  getPrices() {
    if (this.pricesSubject.getValue() !== null) {
      return;
    }
    from(getTickerPrice())
      .pipe(
        catchError((_err: Error) => {
          return of([]);
        }),
      )
      .subscribe((data) => this.pricesSubject.next(data.length ? data : null));
  }
}
