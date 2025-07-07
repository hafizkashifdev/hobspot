"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthAct1983Part9Image,
  img2MentalHealthAct1983Part9Image
} from "@/assets";
import React from "react";

const MentalHealthAct1983Part9PageData = [
  {
    key: "mental-1",
    link: "/part-10-miscellaneous-and-supplementary",
    icon: img1MentalHealthAct1983Part9Image,
    title: "Miscellaneous provisions",
  },
  {
    key: "mental-2",
    link: "/part-10-supplementary",
    icon: img2MentalHealthAct1983Part9Image,
    title: "Supplemental",
  }
];

const MentalHealthAct1983Part9Page = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983Part9PageData}
      pageTitle="PartX Miscellaneous and Supplementary"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default MentalHealthAct1983Part9Page;
