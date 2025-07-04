"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthImage,
  img2MentalHealthImage
} from "@/assets";
import React from "react";

const MentalHealthPageData = [
  {
    key: "mental-1",
    link: "/mental-health-act-1983",
    icon: img1MentalHealthImage,
    title: "Part II Section 1991",
  },
  {
    key: "mental-2",
    link: "/mental-health-act-1983",
    icon: img2MentalHealthImage,
    title: "Part II Enacted",
  }
];

const MentalHealthPage = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthPageData}
      pageTitle="Acts"
      backRoute="/court-hearing"
    />
  );
};

export default MentalHealthPage;
