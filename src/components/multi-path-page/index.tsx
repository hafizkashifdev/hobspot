"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { MultiBackIcon } from "@/assets";

type MultiPathPageItem = {
  title: string;
  link: string;
  icon: string;
};

type MultiPathPageProps = {
  arrayData: MultiPathPageItem[];
  pageTitle: string;
  backRoute?: string;
};

const MultiPathPage: React.FC<MultiPathPageProps> = ({
  arrayData,
  pageTitle,
  backRoute = "/",
}) => {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router]);
  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 5, sm: 3, xs: 2 }}
      >
        <Image
          src={MultiBackIcon}
          alt={pageTitle}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#0246BC"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{
            fontFamily: "inherit",
          }}
        >
          {pageTitle}
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        {!!arrayData.length &&
          arrayData.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
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

export default MultiPathPage;
