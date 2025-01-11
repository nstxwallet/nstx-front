"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { Button, Container, Row, Typography } from "@/shared";

export const NotAllowed = () => {
  const router = useRouter();
  return (
    <Container className="flex flex-col items-center justify-center h-screen space-y-6 text-center">
      <Typography variant="h1">403 Forbidden</Typography>
      <Typography variant="body1">
        You do not have permission to view this page. If you believe this is a mistake, please
        contact support.
      </Typography>
      <Row className="flex justify-center items-center space-x-4">
        <Button onClick={() => router.push("/support")} className="mt-4">
          Support
        </Button>
        <Button variant="bordered" onClick={() => router.push("/")} className="mt-4">
          Go to Home
        </Button>
      </Row>
    </Container>
  );
};
