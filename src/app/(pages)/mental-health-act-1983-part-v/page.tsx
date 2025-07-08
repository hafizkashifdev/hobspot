"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthAct1983PartVImage,
  img2MentalHealthAct1983PartVImage,
  img3MentalHealthAct1983PartVImage,
  img4MentalHealthAct1983PartVImage,
  img5MentalHealthAct1983PartVImage
} from "@/assets";
import React from "react";

const MentalHealthAct1983PartVPageData = [
  {
    key: "mental-1",
    link: "/constitution-etc",
    icon: img1MentalHealthAct1983PartVImage,
    title: "Constitution etc",
  },
  {
    key: "mental-2",
    link: "/applications-and-references-concerning-part-ii-patients",
    icon: img2MentalHealthAct1983PartVImage,
    title: "Applications and References Concerning Part II Patients",
  },
  {
    key: "mental-3",
    link: "/applications-and-references-part-iii-patients",
    icon: img3MentalHealthAct1983PartVImage,
    title: "Applications and References – Part III Patients",
  },
  {
    key: "mental-4",
    link: "/discharge-of-patients",
    icon: img4MentalHealthAct1983PartVImage,
    title: " Discharge of Patients",
  },
  {
    key: "mental-5",
    link: "/part-v-general",
    icon: img5MentalHealthAct1983PartVImage,
    title: " Part V General",
  }
];

const MentalHealthAct1983PartVPage = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983PartVPageData}
      pageTitle="Part V Mental Health Review Tribunals"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default MentalHealthAct1983PartVPage;
