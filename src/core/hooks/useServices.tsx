import { ServicesContext } from "@/core";
import { useContext } from "react";
import "reflect-metadata";

export const useServices = () => {
	const context = useContext(ServicesContext);

	if (!context) {
		throw new Error("Forgot to wrap component in ServicesProvider");
	}
	return context;
};
