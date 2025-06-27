"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets";

interface CommonPageProps {
  src: any;
  backRoute?: string;
  pageTitle: string;
}

const CommonPage: React.FC<CommonPageProps> = ({
  src,
  backRoute = "/",
  pageTitle,
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
          src={CommonBackIcon}
          alt={pageTitle}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
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
      <Image
        src={src}
        alt={pageTitle}
        width={40}
        height={40}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};
export default CommonPage;
