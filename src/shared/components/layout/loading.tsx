import { Flex, Spinner } from "@radix-ui/themes";

export const Loading = () => {
  return (
    <Flex justify="center" align="center" className="min-h-screen">
      <Spinner />
    </Flex>
  );
};
