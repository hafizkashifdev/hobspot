'use client'
import React, { useCallback } from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { Social } from "@/assets";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";

const SocialMediaImageMap = () => {
  const links = [
    {
      href: "/social-create-social-post",
      title: "1 - Create Social Post",
      position: { x: 67, y: 54, width: 311, height: 46 },
      target: "_parent",
    },
    {
      href: "/social-compare-social-posts",
      title: "2 - Compare Social Posts",
      position: { x: 65, y: 539, width: 346, height: 60 },
      target: "_parent",
    },
    {
      href: "/social-schedule-posts-in-bulk",
      title: "3 - Schedule Posts in Bulk",
      position: { x: 60, y: 1023, width: 290, height: 53 },
      target: "_parent",
    },
    {
      href: "/social-social-post-list-view",
      title: "4 - Social Post List View",
      position: { x: 72, y: 1339, width: 240, height: 60 },
      target: "_parent",
    },
    {
      href: "/social-posts-reply",
      title: "5 - Posts Reply",
      position: { x: 60, y: 2290, width: 161, height: 51 },
      target: "_parent",
    },
    {
      href: "/social-social-post-listen",
      title: "6 - Social Post Listen",
      position: { x: 58, y: 2596, width: 163, height: 68 },
      target: "_parent",
    },
    {
      href: "/social-posts-analyze",
      title: "7 - Posts Analyze",
      position: { x: 58, y: 2897, width: 198, height: 82 },
      target: "_parent",
    },
  ];
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/hubspot-marketing");
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
          alt={"forms"}
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
         Social
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: "1848px",
          height: "3213px",
          overflow: "hidden",
          margin: "0 auto",
          backgroundColor: "#f5f7fa",
        }}
      >
        <Image
          src={Social}
          alt="Social Media Management Interface"
          width={1848}
          height={3213}
          quality={100}
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
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
              transition: "all 0.2s ease",
              "&:hover": {
                outline: "2px solid rgba(255,255,255,0.9)",
                opacity: 0.2,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              },
            }}
            aria-label={link.title}
          >
            <Typography
              component="span"
              sx={{
                visibility: "hidden",
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.85)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                zIndex: 10,
                fontSize: "0.875rem",
                fontWeight: "500",
                maxWidth: "280px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                pointerEvents: "none",
                boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
                "&:hover": {
                  visibility: "visible",
                  transform: "translateY(-100%) translateX(-50%)",
                  left: "50%",
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

export default SocialMediaImageMap;
