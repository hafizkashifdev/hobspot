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
    title: "Mental Health Act 1983",
  },
  {
    key: "mental-2",
    link: "/criminal-procedure-insanity-act-1964-section1",
    icon: img2MentalHealthImage,
    title: "Criminal Procedure (Insanity) Act 1964  ",
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
