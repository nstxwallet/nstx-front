import { Accordition, Button, Paper, Text } from "@/shared";
import { Container, Grid } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

interface NetworkType {
  id: string;
  network: string;
  depositAllEnable: boolean;
  withdrawEnable: boolean;
  isDefault: boolean;
}

interface FundOptionProps {
  currency: string;
  networks: NetworkType[];
}

export const FundOption = ({ currency, networks }: FundOptionProps) => {
  const router = useRouter();

  const accordionItems = networks.map(
    ({ network, depositAllEnable, withdrawEnable, isDefault }) => ({
      value: network,
      title: `${currency} / ${network}`,
      content: (
        <>
          <Text size="body1">
            Network: <span className="text-green-400">{network}</span>
          </Text>
          <Grid columns="1" gap="4">
            <Text size="body1">
              {withdrawEnable ? "✅ Enabled withdrawal" : "❌ Disabled withdrawal"}
            </Text>
            <Text size="body1">
              {depositAllEnable ? "✅ Enabled deposit" : "❌ Disabled deposit"}
            </Text>
            {isDefault && (
              <Text size="body1" className="text-green-400">
                Default Network
              </Text>
            )}
          </Grid>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => router.push(`/transactions/fund/${currency}/${network}`)}
          >
            Fund {currency} with {network}
          </Button>
        </>
      ),
    }),
  );

  return (
    <Container size="3" className="justify-center p-6" align={"center"}>
      <Grid columns={{ xs: "1" }} gap="4">
        <Text size="h3">
          {currency} {networks.length > 1 ? "Networks" : "Network"}
        </Text>
        <Accordition items={accordionItems} />
        <Button variant="transparent" fullWidth onClick={() => router.push("/transactions/fund")}>
          Back to Choose Currency
        </Button>
      </Grid>
    </Container>
  );
};
