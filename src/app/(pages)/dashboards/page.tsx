"use client";
import React from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DashboardImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";

// Styled components
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1848px",
  aspectRatio: "1848 / 1844",
  margin: "0 auto",
}));

const OverlayButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: 0,
  minWidth: "unset",
}));

// Interface for clickable areas
interface ClickableArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Clickable areas data
const clickableAreas: ClickableArea[] = [
  {
    id: "1",
    href: "/dashboards-view-dashboard-1",
    title: "View Dashboard 1",
    x: 33.344729344729345,
    y: 40.364672364672366,
    width: 379.0769230769231,
    height: 89.5042735042735,
  },
  {
    id: "2",
    href: "/dashboards-view-report-2",
    title: "View Report 2",
    x: 854.6780626780627,
    y: 80.72934472934473,
    width: 393.1168091168091,
    height: 80.72934472934473,
  },
  {
    id: "3",
    href: "/dashboards-manage-dashboard-3",
    title: "Manage Dashboard 3",
    x: 43.87464387464387,
    y: 358.017094017094,
    width: 477.3561253561254,
    height: 70.1994301994302,
  },
  {
    id: "4",
    href: "/dashboards-actions-4",
    title: "Dashboard Actions 4",
    x: 47.38461538461539,
    y: 635.3048433048433,
    width: 293.08262108262113,
    height: 73.70940170940173,
  },
  {
    id: "5",
    href: "/dashboards-share-5",
    title: "Share Dashboard 5",
    x: 47.38461538461539,
    y: 868.7179487179487,
    width: 294.8376068376068,
    height: 68.44444444444446,
  },
  {
    id: "6",
    href: "/dashboards-add-report-6",
    title: "Add Report 6",
    x: 952.957264957265,
    y: 870.4729344729345,
    width: 342.22222222222206,
    height: 80.72934472934469,
  },
  {
    id: "7",
    href: "/dashboards-create-dashboard-7",
    title: "Create Dashboard 7",
    x: 29.834757834757834,
    y: 1137.2307692307693,
    width: 363.28205128205127,
    height: 84.23931623931617,
  },
  {
    id: "8",
    href: "/dashboards-create-dashboard-from-scratch-8",
    title: "Create Dashboard from Scratch 8",
    x: 47.384615384615415,
    y: 1265.3447293447293,
    width: 329.93732193732194,
    height: 98.27920227920231,
  },
  {
    id: "9",
    href: "/dashboards-create-dashboard-from-templates-9",
    title: "Create Dashboard from Templates 9",
    x: 52.64957264957265,
    y: 1535.6125356125356,
    width: 438.74643874643874,
    height: 117.58404558404573,
  },
];

interface DashboardImageMapProps {
  imageSrc: string;
  imageAlt?: string;
}

const DashboardImageMap: React.FC<DashboardImageMapProps> = () => {
  const router = useRouter();

  const handleAreaClick = (href: string) => {
    router.push(href);
  };

  return (
    <Box p={3}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={"Back Icon"}
          width={40}
          height={40}
          onClick={() => router.push("/hubspot-reporting")}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
        >
            Dashboards
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>
      <ImageContainer>
        <Image
          src={DashboardImage}
          alt="Dashboard Image Map"
          fill
          style={{ objectFit: "contain" }}
          priority
        />

        {/* Clickable Areas */}
        {clickableAreas.map((area) => (
          <OverlayButton
             key={area?.id}
            onClick={() => handleAreaClick(area.href)}
            style={{
              left: `${(area.x / 1848) * 100}%`,
              top: `${(area.y / 1844) * 100}%`,
              width: `${(area.width / 1848) * 100}%`,
              height: `${(area.height / 1844) * 100}%`,
              cursor: "pointer",
            }}
            aria-label={area.title}
          />
        ))}
      </ImageContainer>
    </Box>
  );
};

export default DashboardImageMap;
