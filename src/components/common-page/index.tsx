"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import backVector from "../../features/about-us/assets/back-vector.svg";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface CommonPageProps {
  src: any;
  backRoute: string;
  pageTitle: string;
}

const CommonPage: React.FC<CommonPageProps> = ({
  src,
  backRoute,
  pageTitle,
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
          alt={pageTitle}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h3"
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "2rem", md: "2.5rem" }}
          fontWeight={600}
          ml={2}
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
