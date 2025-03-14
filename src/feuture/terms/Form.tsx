"use client";
import { Container, Grid } from "@radix-ui/themes";
import React from "react";

import { Button, Checkbox, Paper, Row, Text } from "@/shared";

export const TermsForm = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <Container size={{ xs: "1", md: "2" }} className="p-4">
      <Grid columns="1" gap="6">
        <Text size="h4">Privacy Policy and Terms of Service</Text>
        <Text size="body1">
          Please read our Privacy Policy and Terms of Service carefully before using our services.
          By accessing or using our services, you agree to the terms outlined below.
        </Text>
        <Text size="h4">Privacy Policy</Text>
        <Text size="body1">
          We are committed to protecting your personal information. Our privacy policy explains how
          we collect, use, and protect your data. We do not share your personal information with
          third parties without your consent.
        </Text>
        <Paper>
          <Row justify="between" align="center">
            <Text size="body1">Privacy Policy.pdf</Text>
            <Button variant="transparent">Download</Button>
          </Row>
        </Paper>
        <Text size="h4">Terms of Service</Text>
        <Text size="body1">
          By using our services, you agree to comply with our terms and conditions. You must not
          misuse our services, and any violations may result in the termination of your account.
          Please ensure that you understand the rules and policies before proceeding.
        </Text>
        <Grid gap="6" rows="repeat(2, 96px)">
          <Paper>
            <Row justify="between" align="center">
              <Text size="body1">Terms of Service.pdf</Text>
              <Button variant="transparent">Download</Button>
            </Row>
          </Paper>
          <Row align="center" justify="between">
            <Checkbox id="agree" label="I agree to the Privacy Policy and Terms of Service" />
            <Button onClick={() => handleBack()} variant="secondary">
              Accept and Continue
            </Button>
          </Row>
        </Grid>
      </Grid>
      <Text size="body1">
        By using our services, you agree to comply with our terms and conditions. You must not
        misuse our services, and any violations may result in the termination of your account.
        Please ensure that you understand the rules and policies before proceeding. By using our
        services, you agree to comply with our terms and conditions. You must not misuse our
        services, and any violations may result in the termination of your account. Please ensure
        that you understand the rules and policies before proceeding. By using our services, you
        agree to comply with our terms and conditions. You must not misuse our services, and any
        violations may result in the termination of your account. Please ensure that you understand
        the rules and policies before proceeding. conditions. You must not misuse our services, and
        any violations may result in the termination of your account. Please ensure that you
        understand the rules and policies before proceeding. By using our services, you agree to
        comply with our terms and conditions. You must not misuse our services, and any violations
        may result in the termination of your account. Please ensure that you understand the rules
        and policies before proceeding. By using our services, you agree to comply with our terms
        and conditions. You must not misuse our services, and any violations may result in the
        termination of your account. Please ensure that you understand the rules and policies before
        proceeding. By using our services, you agree to comply with our terms and conditions. You
        must not misuse our services, and any violations may result in the termination of your
        account. Please ensure that you understand the rules and policies before proceeding. By
        using our services, you agree to comply with our terms and conditions. You must not misuse
        our services, and any violations may result in the termination of your account. Please
        ensure that you understand the rules and policies before proceeding. By using our services,
        you agree to comply with our terms and conditions. You must not misuse our services, and any
        violations may result in the termination of your account. Please ensure that you understand
        the rules and policies before proceeding. By using our services, you agree to comply with
        our terms and conditions. You must not misuse our services, and any violations may result in
        the termination of your account. Please ensure that you understand the rules and policies
        before proceeding. By using our services, you agree to comply with our terms and conditions.
        You must not misuse our services, and any violations may result in the termination of your
        account. Please ensure that you understand the rules and policies before proceeding.
      </Text>
    </Container>
  );
};
