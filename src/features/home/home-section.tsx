"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import { section10 } from "@/assets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const HomeSection = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h3"
        my={1}
        color="#5A5867"
        fontSize={{ xs: "1rem", md: "1.5rem" }}
        fontWeight={600}
        ml={2}
      >
        Mental Health Listing Process
      </Typography>
      <Stack
        flexDirection="row"
        alignItems={"center"}
        justifyContent="space-between"
        mt={2}
        // mb={5}
      >
        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
        >
          Sequence Diagram for Process for Determining Unfitness to Stand Trial
          Based on Mental Health
        </Typography>
        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
        >
          Colour Legend{" "}
          <KeyboardArrowDownIcon
            sx={{ fontSize: "35px", border: "1px solid", borderRadius: "40px" }}
          />
        </Typography>
      </Stack>
      <Box
        sx={{
          border: "3px dashed #000",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Stack
          flexDirection="row"
          alignItems={"center"}
          justifyContent="space-between"
          mb={5}
        >
          <Typography
            variant="h3"
            my={3}
            color="#5A5867"
            fontSize={{ xs: "1rem", md: "1.5em" }}
            fontWeight={600}
            ml={2}
          >
            End-to-End Mental health Listing Process
          </Typography>
          <Link href="/court-hearing" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "#000",
                backgroundColor: "#F2EBEB",
                border: "1px solid",
                textTransform: "capitalize",
                fontWeight: 600,
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              Detail Breakdown for Court Hearing & Psychiatric Evaluation
            </Button>
          </Link>
        </Stack>
        <Image
          src={section10}
          alt="Hero Image"
          width={40}
          height={40}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};
