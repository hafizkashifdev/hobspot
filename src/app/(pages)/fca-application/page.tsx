"use client";
import { MultiPathPage } from "@/components";
import {
  FcaOverviewImage,
  img4FcaApplicationImage,
} from "@/assets";
import React from "react";

import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";

const FcaApplicationPage = () => {
  return (
    <MultiImagesAmendmentComparisonBtn
      images={[
        { src: FcaOverviewImage, route: "/img1-route", alt: "Image 1" },
        { src: FcaOverviewImage, route: "/img2-route", alt: "Image 2" },
        { src: FcaOverviewImage, route: "/img3-route", alt: "Image 3" },
        { src: img4FcaApplicationImage, route: "/img4-route", alt: "Image 4" },
      ]}
      pageTitle="FCA Application"
      amendmentButtonRoute1="/amendment-1"
      amendmentButtonRoute2="/amendment-2"
      amendmentButtonTitle1="Psychiatrist"
      amendmentButtonTitle2="Social Worker"
      backRoute=""
    />
  );
};

export default FcaApplicationPage;
