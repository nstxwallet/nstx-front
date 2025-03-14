"use client";

import { container } from "tsyringe";
import { AuthService } from "../auth";
import { BalanceService } from "../balance";

container.registerSingleton(AuthService, AuthService);
container.register("UserStream", {
  useValue: container.resolve(AuthService).user,
});
container.registerSingleton(BalanceService, BalanceService);

export { container };
