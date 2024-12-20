import { getCoinMarketCup } from "@/core/api/coinMarketCap";
import { useQuery } from "react-query";

export const useCoinMarketCup = () => {
	const coinMarketCupQuery = useQuery("coinMarketCup", getCoinMarketCup);
	return {
		coinMarketCup: coinMarketCupQuery,
		isLoading: coinMarketCupQuery.isLoading,
		isError: coinMarketCupQuery.isError,
	};
};
