"use client";

import { Box } from "@mui/material";
import React from "react";
import { MultiPathPage } from "@/components";
import { paymentServiceData } from "./data";

export const PaymentServiceNewAuthorisationRegistrationSection = () => {
  return (
    <Box sx={{ p: 3 }}>
      <MultiPathPage
        pageTitle="Payment Services New Authorisation / registration"
        backRoute="/fca-application"
        arrayData={paymentServiceData}
      />
    </Box>
  );
};
