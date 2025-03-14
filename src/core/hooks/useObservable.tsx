"use client";
import "reflect-metadata";
import { useEffect, useState } from "react";
import type { Observable } from "rxjs";

export const useObservable = <T,>(observable: Observable<T>): T | undefined => {
  const [value, setValue] = useState<T | undefined>(undefined);
  useEffect(() => {
    const subscription = observable.subscribe(setValue);
    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);
  return value;
};
