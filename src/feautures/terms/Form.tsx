"use client";
import { Button, Paper, Row, Typography } from "@/shared";
import React from "react";

export const TermsForm = () => {
  return (
    <div className="text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 lg:mb-16">
          <Typography color="blue" variant="h1">
            Privacy Policy and Terms of Service
          </Typography>
          <Typography variant="body1" className="mt-4">
            Please read our privacy policy and terms of service carefully before using our services.
          </Typography>
        </div>

        <Paper className="p-6 lg:p-8 mb-12 lg:mb-16 rounded-lg">
          <Row justify="between" align="center">
            <Typography variant="body1">Privacy Policy.pdf</Typography>
            <Button variant="bordered">Download</Button>
          </Row>
        </Paper>

        <div className="mb-12 lg:mb-16">
          <Typography color="blue" variant="h3">
            Terms of Service
          </Typography>
          <Typography variant="body1" className="mt-4">
            By using our services, you agree to our terms of service. Please read them carefully
            before using our services.
          </Typography>
        </div>

        <Paper className="p-6 lg:p-8 rounded-lg mb-12 lg:mb-16">
          <Typography variant="h4" className="mb-6">
            Document Contents
          </Typography>
          <ul className="space-y-4 lg:space-y-6 list-none">
            <li className="flex items-start">
              <span className="text-green-400 mr-3">●</span>
              <Typography variant="body2">General provisions and definitions.</Typography>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">●</span>
              <Typography variant="body2">
                Rules for collecting and protecting personal data.
              </Typography>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">●</span>
              <Typography variant="body2">Cookie usage rules.</Typography>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">●</span>
              <Typography variant="body2">User rights and obligations.</Typography>
            </li>
          </ul>
        </Paper>
      </div>
    </div>
  );
};
