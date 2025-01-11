import { type User, handleError, instance } from "@/core";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await instance.post("/login", { email, password });
    return response.data.accessToken;
  } catch (error) {
    handleError(error, "Failed to login.");
  }
};

export const logout = async () => {
  try {
    const response = await instance.get("/logout", { withCredentials: true });
    return response.data;
  } catch (error) {
    handleError(error, "Fail to logout");
  }
};

export const register = async (data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  try {
    const response = await instance.post("/sign-up", data);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to sign up.");
  }
};

export const getUser = async (): Promise<User> => {
  try {
    const response = await instance.get("/users/me", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (_error) {
    throw new Error("Failed to get user");
  }
};
