'use client'
import React, { useCallback } from "react";
import Image from "next/image";
import { Box,  Link, Stack, Typography } from "@mui/material";
import { Campaigns } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
;

const CampaignsImageMap = () => {
  const links = [
    {
      href: "/campaigns-create-first-campaign",
      title: "Create Your First Campaign",
      position: { x: 47, y: 44, width: 463, height: 46 },
      target: "_parent",
    },
    {
      href: "/campaigns-start-from-scratch",
      title: "1.1",
      position: { x: 60, y: 123, width: 204, height: 183 },
      target: "_parent",
    },
    {
      href: "/campaigns-start-from-template",
      title: "1.2",
      position: { x: 67, y: 523, width: 198, height: 175 },
      target: "_parent",
    },
    {
      href: "/campaigns-manage-saved-template",
      title: "1.3",
      position: { x: 939, y: 537, width: 214, height: 174 },
      target: "_parent",
    },
    {
      href: "/campaigns-create-campaign-template",
      title: "1.4",
      position: { x: 1237, y: 539, width: 225, height: 161 },
      target: "_parent",
    },
    {
      href: "/campaigns-manage-campaign",
      title: "2",
      position: { x: 40, y: 783, width: 291, height: 65 },
      target: "_parent",
    },
    {
      href: "/campaigns-create-tasks",
      title: "3",
      position: { x: 46, y: 1992, width: 244, height: 60 },
      target: "_parent",
    },
    {
      href: "/campaigns-calendar-view",
      title: "4",
      position: { x: 563, y: 2355, width: 284, height: 68 },
      target: "_parent",
    },
  ];
   const router = useRouter();
  
      const onBackIconClick = useCallback(() => {
          router.push('/hubspot-marketing');
      }, [router]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
        <Stack
          flexDirection="row"
          alignItems="center"
          mt={{ md: 2, xs: 1 }}
          mb={{ md: 4, sm: 3, xs: 2 }}
        >
          <Image
            src={CommonBackIcon}
            alt={"campaigns"}
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
            sx={{ fontFamily: "inherit" }}
          >
          Campaigns
          </Typography>
        </Stack>
      <Box
        sx={{
          position: "relative",

          width: "1848px",
          height: "2640px",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <Image
          src={Campaigns}
          alt="Campaigns Interface"
          width={1848}
          height={2640}
          quality={100}
          priority
        />

        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target={link.target}
            sx={{
              position: "absolute",
              left: `${link.position.x}px`,
              top: `${link.position.y}px`,
              width: `${link.position.width}px`,
              height: `${link.position.height}px`,
              cursor: "pointer",
              "&:hover": {
                outline: "2px solid white",
                opacity: 0.2,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            aria-label={link.title}
          >
            <Typography
              component="span"
              sx={{
                visibility: "hidden",
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.8)",
                color: "white",
                padding: "6px 10px",
                borderRadius: "4px",
                zIndex: 1,
                fontSize: "14px",
                maxWidth: "300px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                pointerEvents: "none",
                "&:hover": {
                  visibility: "visible",
                  transform: "translateY(-100%)",
                },
              }}
            >
              {link.title}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CampaignsImageMap;
