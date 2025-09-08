import { Grid } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { Button, Input, Text } from "@/shared";

export const ChooseFundCurrencyForm = ({
  router,
  currencies,
  search,
  setSearch,
}: {
  router: ReturnType<typeof useRouter>;
  currencies: { coin: string; trading: boolean }[];
  search: string;
  setSearch: (value: string) => void;
}) => {
  return (
    <Grid columns="1" gap="4" className="xs: p-4">
      <Text size="h2">Choose Currency</Text>
      <Input
        type="search"
        placeholder="Search by currency"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid columns={{ xs: "1", md: "2" }} gap="4">
        {currencies
          .filter((currency) => currency.coin.includes(search))
          .map((currency, index) => (
            <Button
              key={`${currency.coin}-${index}`}   
              variant='transparent'
              onClick={() => router.push(`/transactions/fund/${currency.coin}`)}
            >
              {currency.coin}
            </Button>
          ))}
      </Grid>
    </Grid>
  );
};
