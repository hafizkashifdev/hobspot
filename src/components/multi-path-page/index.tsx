"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid, Stack, Typography } from "@mui/material";
import backVector from "../../features/about-us/assets/back-vector.svg";
import { useRouter } from "next/navigation";

type MultiPathPageItem = {
  title: string;
  link: string;
  icon: string;
};

type MultiPathPageProps = {
  arrayData: MultiPathPageItem[];
  pageTitle: string;
  backRoute: string;
};

const MultiPathPage: React.FC<MultiPathPageProps> = ({
  arrayData,
  pageTitle,
  backRoute,
}) => {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router]);
  return (
    <Box sx={{ p: 3 }}>
      <Stack flexDirection="row" alignItems={"center"} mt={2} mb={5}>
        <Image
          src={backVector}
          alt={pageTitle || "Back"}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h3"
          color="#0246BC"
          fontSize={{ xs: "1rem", sm: "2rem", md: "2.5rem" }}
          fontWeight={600}
          ml={2}
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
