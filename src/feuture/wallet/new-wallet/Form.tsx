import { Container, Grid } from "@radix-ui/themes";
import type { FormikProps } from "formik";
import type { useRouter } from "next/navigation";

import type { Balance, User } from "@/core";
import { BalanceCard } from "@/feuture";
import { Button, Checkbox, Col, Form, Paper, Row, Select, Text } from "@/shared";

interface NewWalletFormProps {
  formik: FormikProps<{ currency: string; terms: boolean }>;
  handleCancel: () => void;
  router: ReturnType<typeof useRouter>;
  currency: string[];
  balance?: Balance | null | undefined;
  user?: User | null;
}

export const NewWallet = ({
  formik,
  router,
  handleCancel,
  currency,
  balance,
  user,
}: NewWalletFormProps) => {
  return (
    <Grid justify="center" rows="repeat(2, 200px)" width="auto">
      <Container size="4">
        <Text size="body" className="mb-4 text-center">
          You create {balance?.currency} balance, currently you have - 0.00 {balance?.currency} in
          your account.
        </Text>
        <Grid columns={{ xs: "1", md: "2" }}>
          <Row>
            <BalanceCard user={user} balance={balance} />
          </Row>
          <Paper>
            <Text size="body1">
              Select a currency to create a new balance in your account, you can choose one from a
              wide range of currencies.
            </Text>
            <Form onSubmit={formik.handleSubmit}>
              <Select
                options={currency}
                placeholder="Select a currency"
                value={formik.values.currency}
                onChange={(value) => formik.setFieldValue("currency", value)}
              />
              <Checkbox
                onChange={(checked) => formik.setFieldValue("terms", checked)}
                id="terms"
                label="I agree to the terms and conditions"
                checked={formik.values.terms}
              />
              <Col justify="between" className="space-x-4">
                <Button fullWidth variant="transparent" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button fullWidth variant="secondary" type="submit">
                  {formik.values.currency
                    ? `Create ${formik.values.currency} Balance`
                    : "Create Balance"}
                </Button>
              </Col>
              <Button variant="transparent" onClick={() => router.push("/terms")}>
                Terms and Conditions
              </Button>
            </Form>
          </Paper>
        </Grid>
      </Container>
    </Grid>
  );
};
