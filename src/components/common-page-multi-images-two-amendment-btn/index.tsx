"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";

interface ImageItem {
  src: any;
  route: string;
  alt?: string;
}

interface CommonPageProps {
  src?: any; // for backward compatibility
  images?: ImageItem[];
  backRoute?: string;
  pageTitle: string;
  onChange?: (selectedValue: string, page: string) => void;
  amendmentButtonRoute1?: string;
  amendmentButtonRoute2?: string;
  amendmentButtonTitle1?: string;
  amendmentButtonTitle2?: string;
}

const MultiImagesAmendmentComparisonBtn: React.FC<CommonPageProps> = ({
  src,
  images,
  backRoute = "/",
  pageTitle,
  onChange,
  amendmentButtonRoute1 = "/amendment-comparison-1",
  amendmentButtonRoute2 = "/amendment-comparison-2",
  amendmentButtonTitle1 = "Amendment Comparison 1",
  amendmentButtonTitle2 = "Amendment Comparison 2",
}) => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const onAmendmentButtonClick1 = useCallback(() => {
    router.push(amendmentButtonRoute1);
  }, [router, amendmentButtonRoute1]);

  const onAmendmentButtonClick2 = useCallback(() => {
    router.push(amendmentButtonRoute2);
  }, [router, amendmentButtonRoute2]);

  const handleImageClick = (route: string) => {
    if (route) router.push(route);
  };

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        mt={{ md: 2, xs: 4 }}
        mb={{ md: 4, sm: 3, xs: 4 }}
        gap={{ xs: 2, md: 0 }}
      >
        <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1}>
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
            sx={{ fontFamily: "Outfit, inherit" }}
          >
            {pageTitle}
          </Typography>
        </Box>
      </Stack>

      {/* Checkbox and Button Row */}
      <Box
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "left" }}
        justifyContent="space-between"
        gap={0}
      >
        <Box flexGrow={1}>
          <CheckboxForm onChange={onChange} />
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", ml: "auto" }}>
          <Button
            variant="contained"
            onClick={onAmendmentButtonClick1}
            sx={{
              backgroundColor: "#5A5867",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#4A4857",
              },
              cursor: "pointer",
              fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
              padding: { xs: "6px 12px", md: "8px 16px" },
              textTransform: "capitalize",
              fontFamily: "Outfit, inherit",
            }}
          >
            {amendmentButtonTitle1}
          </Button>
          <Button
            variant="contained"
            onClick={onAmendmentButtonClick2}
            sx={{
              backgroundColor: "#5A5867",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#4A4857",
              },
              cursor: "pointer",
              fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
              padding: { xs: "6px 12px", md: "8px 16px" },
              textTransform: "capitalize",
              fontFamily: "Outfit, inherit",
            }}
          >
            {amendmentButtonTitle2}
          </Button>
        </Box>
      </Box>

      {/* Render multiple images if provided, else fallback to single src */}
      {Array.isArray(images) && images.length > 0 ? (
        <Stack direction="column" spacing={0} alignItems="center">
          {" "}
          {/* Change spacing from 1 to 0 */}
          {images.map((img, idx) => (
            <Image
              key={img.route || idx}
              src={img.src}
              alt={img.alt || pageTitle}
              style={{
                width: "100%",
                cursor: img.route ? "pointer" : undefined,
              }}
              onClick={() => img.route && handleImageClick(img.route)}
            />
          ))}
        </Stack>
      ) : (
        src && <Image src={src} alt={pageTitle} style={{ width: "100%" }} />
      )}
    </Box>
  );
};
export default MultiImagesAmendmentComparisonBtn;
