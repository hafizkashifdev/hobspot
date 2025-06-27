"use client";

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import backVector from "./assets/back-vector.svg";
// import Section from "./assets/Section.svg";
import Section2 from "./assets/section2.svg";

import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const AboutUsSection = () => {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography
          variant="h3"
          my={1}
          color="#5A5867"
          fontSize={{ xs: "1rem",md: "1.5rem" }}
          fontWeight={600}
          ml={2}
        >
         Mental Health Listing Process
        </Typography>
        <Stack flexDirection="row" alignItems={"center"} mt={2} mb={5}>

        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
          >
          Sequence Diagram for Process for Determining Unfitness to Stand Trial Based on Mental Health
        </Typography>
        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
          >
         Colour Legend
        </Typography>
          </Stack>
      {/* <Stack flexDirection="row" alignItems={"center"} mt={2} mb={5}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image
            src={backVector}
            alt="Hero Image"
            width={40}
            height={40}
            onClick={onBackIconClick}
          />
        </Link>
        <Typography
          variant="h3"
          mt={1}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "2rem", md: "2.5rem" }}
          fontWeight={600}
          ml={2}
        >
          Mental Health / Identification of Unfitness to Stand Trial
        </Typography>
      </Stack>
      <Image
        src={Section2}
        alt="Hero Image"
        width={40}
        height={40}
        style={{ width: "100%", height: "100%" }}
      /> */}
    </Box>
  );
};
