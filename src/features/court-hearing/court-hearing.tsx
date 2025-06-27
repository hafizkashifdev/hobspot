"use client";

import { Box, Grid } from "@mui/material";
import React from "react";
import { MultiPathPage } from "@/components";
import { courtHearingData, courtHearingDataTwo } from "./court-hearing-data";
import Image from "next/image";
import Link from "next/link";

export const CourtHearingSection = () => {
  return (
    <Box sx={{ p: 3 }}>
      <MultiPathPage
        pageTitle="Court Hearing & Psychiatric Evaluation for Mental Health"
        backRoute="/"
        arrayData={courtHearingData}
      />
      <Grid container spacing={2}>
        {courtHearingDataTwo.map((item:any) => (
          <Grid size={{ sm: 12, md: item.md }}>
            <Link href={item.link} style={{ textDecoration: "none" }}>
              <Image
                src={item.icon}
                alt="Hero Image"
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
