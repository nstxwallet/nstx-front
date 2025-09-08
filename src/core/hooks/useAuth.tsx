"use client";

import { useObservable, useServices } from "@/core";
import { useMemo } from "react";

export const useAuth = () => {
  const { authService } = useServices();
  const user = useObservable(authService.user);

  const authActions = useMemo(
    () => ({
      login: authService.loginUser.bind(authService),
      logout: authService.logout.bind(authService),
      signup: authService.signupUser.bind(authService),
    }),
    [authService],
  );

  return { login : authActions.login, logout: authActions.logout, signup: authActions.signup, user }
};
