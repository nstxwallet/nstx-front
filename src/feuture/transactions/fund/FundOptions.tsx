import { Container } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

import { Accordition, Button, Text } from "@/shared";

interface FundOptionrops {
  currency: string;
  fundingTypes: string[];
  router: ReturnType<typeof useRouter>;
}
export const FundOption = ({ currency, fundingTypes, router }: FundOptionrops) => {
  return (
    <Container size="1" className="p-4">
      <Text size="h5" className="mb-4">
        Fund {currency}
      </Text>
      <div className="flex flex-col items-start w-full">
        {fundingTypes.map((type: string) => (
          <div key={type} className="mb-4 w-full text-left">
            <Accordition
              items={[
                {
                  title: type,
                  value: type,
                  content: (
                    <div>
                      <Text size="h3" className="mb-4">
                        {type}
                      </Text>
                      <Button
                        fullWidth
                        variant="transparent"
                        onClick={() =>
                          router.push(`transactions/fund/${currency}/${type.toLowerCase()}`)
                        }
                      >
                        Fund
                      </Button>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        ))}
      </div>
      <Button variant="transparent" fullWidth onClick={() => router.push("/transactions/fund")}>
        Back to Choose Currency
      </Button>
    </Container>
  );
};
