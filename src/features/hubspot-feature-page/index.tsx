"use client";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import HotspotsImageMap from "@/components/hotspot-image-map";
import Link from "next/link";

interface CommonPageProps {
  pageTitle: string;
  backRoute?: string;
  imageSrc: string | StaticImageData;
  areas: any;
  imageHeight: number;
  imageWidth: number;
}

const HubspotFeaturePage: React.FC<CommonPageProps> = ({
  imageSrc,
  backRoute = "/",
  pageTitle,
  areas,
  imageHeight,
  imageWidth,
}) => {

  return (
    <Box sx={{ p: '40px' }}>
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Box component={Link} href={backRoute}>
          <Image
            src={CommonBackIcon}
            alt={pageTitle}
            width={48}
            height={48}
          />
        </Box>

        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "20", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          sx={{ fontFamily: "inherit", lineHeight: '1.25' }}
        >
          {pageTitle}
        </Typography>
      </Box>

      <HotspotsImageMap
        imageSrc={imageSrc}
        imageAlt={pageTitle}
        hotspots={areas}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
    </Box>
  );
};

export default HubspotFeaturePage;
