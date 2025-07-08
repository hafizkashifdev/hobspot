"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthAct1983Part6Image,
  img2MentalHealthAct1983Part6Image,
  img3MentalHealthAct1983Part6Image,
  img4MentalHealthAct1983Part6Image,
  img5MentalHealthAct1983Part6Image,
  img6MentalHealthAct1983Part6Image
} from "@/assets";
import React from "react";

const MentalHealthAct1983Part6PageData = [
  {
    key: "mental-1",
    link: "/removal-to-and-from-scotland",
    icon: img1MentalHealthAct1983Part6Image,
    title: "Removal to and from Scotland",
  },
  {
    key: "mental-2",
    link: "/removal-of-patients-to-channel-islands-or-isle-of-man",
    icon: img2MentalHealthAct1983Part6Image,
    title: "Removal of patients to Northern Ireland.",
  },
  {
    key: "mental-3",
    link: "/removal-of-patients-to-northern-ireland",
    icon: img3MentalHealthAct1983Part6Image,
    title: "After-Removal of patients to Channel Islands or Isle of Man.",
  },
  {
    key: "mental-4",
    link: "/removal-of-aliens",
    icon: img4MentalHealthAct1983Part6Image,
    title: "Removal of alien patients.",
  },
  {
    key: "mental-5",
    link: "/return-of-patients-absent-without-leave",
    icon: img5MentalHealthAct1983Part6Image,
    title: " Return of patients absent without leave",
  },
  {
    key: "mental-6",
    link: "/general",
    icon: img6MentalHealthAct1983Part6Image,
    title: "General",
  }
];

const MentalHealthAct1983Part6Page = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983Part6PageData}
      pageTitle="Part VI Removal and Return of Patients Within United Kingdom, etc."
      backRoute="/mental-health-act-1983"
    />
  );
};

export default MentalHealthAct1983Part6Page;
