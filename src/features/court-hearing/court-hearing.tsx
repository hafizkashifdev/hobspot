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
        fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" }}
        arrayData={courtHearingData}
      />
    </Box>
  );
};
