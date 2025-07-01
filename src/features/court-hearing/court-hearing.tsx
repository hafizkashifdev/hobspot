"use client";

import { Box } from "@mui/material";
import React from "react";
import { MultiPathPage } from "@/components";
import { courtHearingData } from "./court-hearing-data";

export const CourtHearingSection = () => {
  return (
    <Box sx={{ p: 3 }}>
      <MultiPathPage
        pageTitle="Court Hearing & Psychiatric Evaluation for Mental Health"
        backRoute="/"
        arrayData={courtHearingData}
      />
    </Box>
  );
};
