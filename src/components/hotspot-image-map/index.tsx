"use client";
import React from 'react'
import { Box, Tooltip } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HotspotArea {
  id: string | number;
  title: string;
  href: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface HotspotImageMapProps {
  hotspots: HotspotArea[];
  imageSrc: string | StaticImageData;
  imageHeight: number;
  imageWidth: number;
  imageAlt: string;
  priority?: boolean;
}

export default function HotspotsImageMap({
  imageSrc,
  imageAlt,
  hotspots,
  imageHeight,
  imageWidth,
}: HotspotImageMapProps) {
  return (
    <Box sx={{ pt: '20px' }}>
      <Box sx={{ position: "relative", overflow: 'hidden', width: "100%" }}>

        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
        />

        {hotspots?.map((area: any) => (
          <Tooltip
            key={area.id}
            title={area.title}
            arrow
            placement="top"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  fontSize: '0.875rem',
                  maxWidth: 250,
                }
              },
              arrow: {
                sx: {
                  color: 'primary.main',
                }
              }
            }}
          >
            <Box
              component={Link}
              href={area.href}
              sx={{
                position: "absolute",
                left: `${(area.x / imageWidth) * 100}%`,
                top: `${(area.y / imageHeight) * 100}%`,
                width: `${(area.width / imageWidth) * 100}%`,
                height: `${(area.height / imageHeight) * 100}%`,
                display: 'block',
              }}
            />
          </Tooltip>
        ))}

      </Box>
    </Box>
  )
}
