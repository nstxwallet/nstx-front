"use client";
import { AuthService } from "@/core/services/auth/AuthService";
import { BalanceService } from "@/core/services/balance";
import { container } from "@/core/services/provider/services";
import { Loading } from "@/shared/components";
import React, {
	createContext,
	type FC,
	type ReactNode,
	useEffect,
	useState,
} from "react";
import "reflect-metadata";
import { ToastProvider, TransactionService } from "@/core";
import { UserSettingsService } from "@/core/services/settings";

interface Services {
	authService: AuthService;
	balanceService: BalanceService;
	transactionService: TransactionService;
	userSettingsService: UserSettingsService;
}

interface ServicesProviderProps {
	children: ReactNode;
}

export const ServicesContext = createContext<Services | null>(null);

export const ServicesProvider: FC<ServicesProviderProps> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [services, setServices] = useState<Services | null>(null);

	useEffect(() => {
		const init = async () => {
			const authService = container.resolve(AuthService);
			const balanceService = container.resolve(BalanceService);
			const transactionService = container.resolve(TransactionService);
			const userSettingsService = container.resolve(UserSettingsService);

			setServices({
				authService,
				balanceService,
				transactionService,
				userSettingsService,
			});
			setLoading(false);
		};
		init();
	}, []);

	if (loading || !services) {
		return <Loading />;
	}

	return (
		<ServicesContext.Provider value={services}>
			<ToastProvider />
			{children}
		</ServicesContext.Provider>
	);
};
