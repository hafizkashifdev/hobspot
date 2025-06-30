"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import { colorLegends, section10 } from "@/assets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        legendRef.current &&
        !legendRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ p: 3, position: "relative" }}>
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
        flexWrap={"wrap"}
        mt={2}
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
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "1.8rem" }}
          fontWeight={600}
          textTransform={"uppercase"}
          ml={2}
        >
          Colour Legend{" "}
          <span ref={iconRef}>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "25px",
                border: "2px solid",
                borderRadius: "40px",
                cursor: "pointer",
              }}
              onClick={toggleDropdown}
            />
          </span>
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
          flexWrap={"wrap"}
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

        {isOpen && (
          <Box
            ref={legendRef}
            sx={{ position: "absolute", top: "150px", right: "50px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={colorLegends}
              alt="Color Legend"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
