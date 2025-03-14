import { type Price, handleRequest, instance } from "@/core";

export const getTickerPrice = async (): Promise<Price[]> => {
  return handleRequest(instance.get<Price[]>("/prices"));
};
