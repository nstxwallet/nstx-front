"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { Button, Row, Text } from "@/shared";
import { Container, Grid } from "@radix-ui/themes";

export const NotAuthorized = () => {
  const router = useRouter();
  return (
    <Container size="1" className="justify-center min-h-screen">
      <Grid columns={{ xs: "1", md: "2" }} gap="4">
        <Text size="h1">403 Forbidden</Text>{" "}
        <Row>
          <Button variant="transparent" onClick={() => router.push("/support")} className="mt-4">
            Support
          </Button>
          <Button fullWidth onClick={() => router.push("/")} className="mt-4">
            Go to Home
          </Button>
        </Row>
        <Text size="body1">
          You do not have permission to view this page. If you believe this is a mistake, please
          contact support.
        </Text>
      </Grid>
    </Container>
  );
};
