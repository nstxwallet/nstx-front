"use client";

import { useObservable, useServices } from "@/core";

export const useAuth = () => {
  const { authService } = useServices();
  const user = useObservable(authService.user);
  const login = (values: { email: string; password: string }) => {
    return authService.loginUser(values);
  };
  const logout = () => {
    return authService.logout();
  };
  const signup = (values: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    return authService.signupUser(values);
  };
  return { login, logout, signup, user };
};
