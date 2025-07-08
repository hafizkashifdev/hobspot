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
    link: "/removal-to-and-from-scotland",
    icon: img1FcaApplicationImage,
    title: "Removal to and from Scotland",
  },
  {
    key: "fca-2",
    link: "/removal-of-patients-to-channel-islands-or-isle-of-man",
    icon: img2FcaApplicationImage,
    title: "Removal of patients to Northern Ireland.",
  },
  {
    key: "fca-3",
    link: "/removal-of-patients-to-northern-ireland",
    icon: img3FcaApplicationImage,
    title: "After-Removal of patients to Channel Islands or Isle of Man.",
  },
  {
    key: "fca-4",
    link: "/removal-of-aliens",
    icon: img4FcaApplicationImage,
    title: "FCA Application Item 4",
  }
];

const FcaApplicationPage = () => {
  return (
    <MultiPathPage
      arrayData={FcaApplicationPageData}
      pageTitle="FCA Application"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default FcaApplicationPage;
