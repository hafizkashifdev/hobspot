"use client";
import React, { useState } from "react";
import { Box, Paper, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ContentImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";

const ContentImageMap = () => {
  const router = useRouter();
  const [hoveredArea, setHoveredArea] = useState(null);

  // Image map areas configuration
  const mapAreas = [
    {
      id: 1,
      href: "/content-website-pages-1",
      title: "Website Pages",
      coords: { x: 28.23, y: 26.47, width: 356.43, height: 95.28 },
    },
    {
      id: 2,
      href: "/content-landing-pages-2",
      title: "Landing Pages",
      coords: { x: 10.59, y: 354.66, width: 432.3, height: 81.17 },
    },
    {
      id: 3,
      href: "/content-blog-3",
      title: "Blog",
      coords: { x: 17.64, y: 672.27, width: 333.49, height: 75.87 },
    },
    {
      id: 4,
      href: "/content-podcasts-4",
      title: "Podcasts",
      coords: { x: 19.41, y: 984.58, width: 314.08, height: 77.64 },
    },
    {
      id: 5,
      href: "/content-case-studies-5",
      title: "Case Studies",
      coords: { x: 14.12, y: 1312.77, width: 418.18, height: 88.22 },
    },
    {
      id: 6,
      href: "/content-embeds-6",
      title: "Embeds",
      coords: { x: 14.12, y: 1632.15, width: 322.9, height: 86.46 },
    },
    {
      id: 7,
      href: "/content-knowledge-base-7",
      title: "Knowledge Base",
      coords: { x: 26.47, y: 1939.17, width: 402.3, height: 84.7 },
    },
    {
      id: 8,
      href: "/content-setup-knowledge-base-8",
      title: "Setup Knowledge Base",
      coords: { x: 63.52, y: 2030.92, width: 441.12, height: 74.11 },
    },
    {
      id: 9,
      href: "/content-customer-portal-9",
      title: "Customer Portal",
      coords: { x: 26.47, y: 2387.34, width: 421.71, height: 75.87 },
    },
    {
      id: 10,
      href: "/content-general-10",
      title: "General Content",
      coords: { x: 56.46, y: 2475.57, width: 409.36, height: 77.64 },
    },
    {
      id: 11,
      href: "/content-template-11",
      title: "Templates",
      coords: { x: 59.99, y: 2983.74, width: 381.13, height: 88.22 },
    },
    {
      id: 12,
      href: "/content-hubdb-12",
      title: "HubDB",
      coords: { x: 17.64, y: 3327.81, width: 386.42, height: 93.52 },
    },
    {
      id: 13,
      href: "/content-remix-13",
      title: "Remix",
      coords: { x: 24.7, y: 3626.01, width: 434.06, height: 91.75 },
    },
    {
      id: 14,
      href: "/content-seo-14",
      title: "SEO",
      coords: { x: 22.94, y: 3945.38, width: 437.59, height: 84.7 },
    },
    {
      id: 15,
      href: "/content-membership-create-access-group-15",
      title: "Membership - Create Access Group",
      coords: { x: 19.41, y: 4245.34, width: 661.68, height: 86.46 },
    },
    {
      id: 16,
      href: "/content-design-manager-16",
      title: "Design Manager",
      coords: { x: 24.7, y: 4693.52, width: 546.99, height: 105.87 },
    },
  ];

  const handleAreaClick = (href: any) => {
    router.push(href);
  };

  const handleAreaHover = (areaId: any) => {
    setHoveredArea(areaId);
  };

  const handleAreaLeave = () => {
    setHoveredArea(null);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", overflow: "hidden", p: 3 }}>
    
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
            onClick={() => router.push("/")}
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
            Content
          </Typography>
        </Stack>
        <Box mb={{ md: 4, sm: 3, xs: 2 }}>
          <CheckboxForm onChange={() => {}} />
        </Box>
        <Box sx={{ position: "relative", width: "100%", height: "auto",}}>
          <Image
            src={ContentImage}
            alt="Content Management Interface"
            width={1858}
            height={5037}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />

          {/* Interactive Areas */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {mapAreas.map((area) => (
                <Box
                  onClick={() => handleAreaClick(area.href)}
                  onMouseEnter={() => handleAreaHover(area.id)}
                  onMouseLeave={handleAreaLeave}
                  sx={{
                    position: "absolute",
                    left: `${(area.coords.x / 1858) * 100}%`,
                    top: `${(area.coords.y / 5037) * 100}%`,
                    width: `${(area.coords.width / 1858) * 100}%`,
                    height: `${(area.coords.height / 5037) * 100}%`,
                    cursor: "pointer",
                    pointerEvents: "auto",
                  }}
                />
            ))}
          </Box>
        </Box>
      
    </Box>
  );
};

export default ContentImageMap;
