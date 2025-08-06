"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { Email } from "@/assets";

const EmailImageMap = () => {
  const links = [
    {
      href: "/emails-select-email-type",
      title: "1",
      position: { x: 44, y: 33, width: 319, height: 61 },
      target: "_parent",
    },
    {
      href: "/emails-choose-email-template",
      title: "1.1",
      position: { x: 75, y: 402, width: 186, height: 170 },
      target: "_parent",
    },
    {
      href: "/emails-manage-email",
      title: "1.1.1",
      position: { x: 398, y: 735, width: 267, height: 193 },
      target: "_parent",
    },
    {
      href: "/emails-analyze-email",
      title: "1.1.2",
      position: { x: 395, y: 1429, width: 270, height: 205 },
      target: "_parent",
    },
    {
      href: "/emails-email-health",
      title: "1.1.3",
      position: { x: 402, y: 1795, width: 260, height: 183 },
      target: "_self",
    },
    {
      href: "/emails-blogrss-email",
      title: "1.2",
      position: { x: 74, y: 2073, width: 184, height: 135 },
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
          Emails
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: "1848px",
          height: "2245px",
          overflow: "hidden",
          margin: "0 auto",
          backgroundColor: "#f5f5f5", // Optional: adds background if image has transparency
        }}
      >
        <Image
          src={Email}
          alt="Email Interface"
          width={1848}
          height={2245}
          quality={100}
          priority
          style={{
            objectFit: "contain",
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
              transition: "opacity 0.2s ease",
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
                padding: "8px 12px",
                borderRadius: "4px",
                zIndex: 1,
                fontSize: "14px",
                fontWeight: "500",
                maxWidth: "300px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                pointerEvents: "none",
                "&:hover": {
                  visibility: "visible",
                  transform: "translateY(-100%)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
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

export default EmailImageMap;
