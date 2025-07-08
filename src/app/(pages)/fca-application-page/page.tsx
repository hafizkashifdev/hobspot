"use client";
import React from "react";
import { FcaOverviewImage } from "@/assets";
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";

const FcaApplicationPagePage = () => {
  return (
    <MultiImagesAmendmentComparisonBtn
      images={[
        { src: FcaOverviewImage, route: "/img1-route", alt: "Image 1" },
        { src: FcaOverviewImage, route: "/img2-route", alt: "Image 2" },
        { src: FcaOverviewImage, route: "/img3-route", alt: "Image 3" },
        { src: FcaOverviewImage, route: "/img4-route", alt: "Image 4" },
      ]}
      pageTitle="FCA Application Page"
      amendmentButtonRoute1="/amendment-1"
      amendmentButtonTitle1="Psychiatrist"
      amendmentButtonRoute2="/amendment-2"
      amendmentButtonTitle2="Social Worker"
    />
  );
};

export default FcaApplicationPagePage;
