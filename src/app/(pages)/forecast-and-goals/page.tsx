"use client";
import React from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { ForecastImage } from "@/assets";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1848px",
  aspectRatio: "1848 / 2929",
  margin: "0 auto",
}));

const OverlayButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  border: "none",
  borderRadius: 0,
  minWidth: "unset",
}));

interface ClickableArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const clickableAreas: ClickableArea[] = [
  {
    id: "1",
    href: "/forecast-forecast-main-screen-1",
    title: "Forecast Main Screen",
    x: 21.059829059829056,
    y: 28.079772079772084,
    width: 377.32193732193736,
    height: 73.7094017094017,
  },
  {
    id: "2",
    href: "/forecast-create-goal-setup-stage-4",
    title: "Create Goal Setup Stage",
    x: 21.05982905982905,
    y: 663.3846153846155,
    width: 396.62678062678066,
    height: 66.68945868945866,
  },
  {
    id: "3",
    href: "/forecast-create-goal-setup-stage-4",
    title: "Create Goal Setup Stage",
    x: 47.38461538461539,
    y: 747.6239316239316,
    width: 375.5669515669516,
    height: 63.17948717948718,
  },
  {
    id: "4",
    href: "/forecast-create-goal-performance-5",
    title: "Create Goal Performance",
    x: 45.629629629629626,
    y: 1005.6068376068376,
    width: 433.48148148148147,
    height: 68.44444444444434,
  },
  {
    id: "5",
    href: "/forecast-goal-main-screen-2",
    title: "Goal Main Screen",
    x: 29.834757834757824,
    y: 1265.3447293447293,
    width: 408.91168091168095,
    height: 82.48433048433048,
  },
  {
    id: "6",
    href: "/forecast-edit-goal-7",
    title: "Edit Goal",
    x: 31.58974358974359,
    y: 2039.2934472934473,
    width: 314.1424501424501,
    height: 80.7293447293448,
  },
  {
    id: "7",
    href: "/forecast-view-goal-3",
    title: "View Goal",
    x: 21.05982905982906,
    y: 2337.641025641026,
    width: 368.54700854700855,
    height: 73.70940170940139,
  },
  {
    id: "8",
    href: "/forecast-create-goal-notification-settings-6",
    title: "Create Goal Notification Settings",
    x: 1400.4786324786326,
    y: 745.8689458689458,
    width: 393.116809116809,
    height: 82.48433048433048,
  },
];

interface ForecastImageMapProps {
  imageSrc: string;
  imageAlt?: string;
}

const ForecastImageMap: React.FC<ForecastImageMapProps> = () => {
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
          Forecast & Goals
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>

      <ImageContainer>
        <Image
          src={ForecastImage}
          alt="Forecast Image"
          fill
          style={{ objectFit: "contain" }}
          priority
        />

        {clickableAreas.map((area) => (
          <OverlayButton
            key={area.id}
            onClick={() => handleAreaClick(area.href)}
            style={{
              left: `${(area.x / 1848) * 100}%`,
              top: `${(area.y / 2929) * 100}%`,
              width: `${(area.width / 1848) * 100}%`,
              height: `${(area.height / 2929) * 100}%`,
              cursor: "pointer",
            }}
            aria-label={area.title}
          />
        ))}
      </ImageContainer>
    </Box>
  );
};

export default ForecastImageMap;
