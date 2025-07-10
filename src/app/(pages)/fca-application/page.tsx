"use client";
import { MultiPathPage } from "@/components";
import {
  img1FcaApplicationImage,
  img2FcaApplicationImage,
  img3FcaApplicationImage,
  img4FcaApplicationImage
} from "@/assets";
import React from "react";

const FcaApplicationPageData = [
  {
    key: "fca-1",
    link: "/fca-overview",
    icon: img1FcaApplicationImage,
    title: "FCA Overview",
  },
  {
    key: "fca-2",
    link: "/removal-of-patients-to-channel-islands-or-isle-of-man",
    icon: img2FcaApplicationImage,
    title: "Payment Services New Authorisation  Registration",
  },
  {
    key: "fca-3",
    link: "/removal-of-patients-to-northern-ireland",
    icon: img3FcaApplicationImage,
    title: "E-Money New Authorisation / Registration",
  },
  {
    key: "fca-4",
    link: "/removal-of-aliens",
    icon: img4FcaApplicationImage,
    title: "Payment Services and Electronic Money – Our Approach",
  }
];

const FcaApplicationPage = () => {
  return (
    <MultiPathPage
      arrayData={FcaApplicationPageData}
      pageTitle="FCA Application"
      backRoute="/FCA Sequence Diagram"
    />
  );
};

export default FcaApplicationPage;
