import { Grid } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

import { Button, Input, Text } from "@/shared";

export const ChooseFundCurrencyForm = ({
  router,
  filteredCurrencies,
  search,
  setSearch,
}: {
  router: ReturnType<typeof useRouter>;
  currency: string[];
  filteredCurrencies: string[];
  search: string;
  setSearch: (value: string) => void;
}) => {
  return (
    <Grid columns="1" gap="4">
      <Text size="h2">Choose Currency</Text>
      <Input
        type="search"
        placeholder="Search by currency"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid columns={{ xs: "1", md: "2" }} gap="4">
        {filteredCurrencies.length > 0 ? (
          filteredCurrencies.map((currency) => (
            <Button
              key={currency}
              fullWidth
              variant="transparent"
              onClick={() => router?.push?.(`/transactions/fund/${currency}`)}
            >
              {currency}
            </Button>
          ))
        ) : (
          <Text size="body1">No currencies found</Text>
        )}
      </Grid>
    </Grid>
  );
};
