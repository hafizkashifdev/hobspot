"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthAct1983Image,
  img2MentalHealthAct1983Image,
  img3MentalHealthAct1983Image,
  img4MentalHealthAct1983Image,
  img5MentalHealthAct1983Image,
  img6MentalHealthAct1983Image,
  img7MentalHealthAct1983Image,
  img8MentalHealthAct1983Image,
  img9MentalHealthAct1983Image,
  img10MentalHealthAct1983Image,
  img11MentalHealthAct1983Image,
  img12MentalHealthAct1983Image,
  img13MentalHealthAct1983Image
} from "@/assets";
import React from "react";

const MentalHealthAct1983PageData = [
  {
    key: "mental-1",
    link: "/introduction",
    icon: img1MentalHealthAct1983Image,
    title: "Introduction",
  },
  {
    key: "mental-2",
    link: "/part-1",
    icon: img2MentalHealthAct1983Image,
    title: "Part I Application of Act",
  },
  {
    key: "mental-3",
    link: "/mental-health-act-1983-part-ii",
    icon: img3MentalHealthAct1983Image,
    title: "Part II Compulsory Admission to Hospital and Guardianship",
  },
  {
    key: "mental-4",
    link: "/",
    icon: img4MentalHealthAct1983Image,
    title: "Part III Patients Concerned in Criminal Proceedings",
  },
  {
    key: "mental-5",
    link: "/",
    icon: img5MentalHealthAct1983Image,
    title: "Part IV Consent to Treatment",
  },
  {
    key: "mental-6",
    link: "/part-4a-treatment-of-community-patients-not-recalled-to-hospital",
    icon: img6MentalHealthAct1983Image,
    title: "Part IV A Treatment of community patients not recalled to hospital",
  },
  {
    key: "mental-7",
    link: "/mental-health-act-1983-part-v",
    icon: img7MentalHealthAct1983Image,
  title: "Part V Mental Health Review Tribunals",
  },
  {
    key: "mental-8",
    link: "/mental-health-act-1983-part-6",
    icon: img8MentalHealthAct1983Image,
    title: "Part VIII Miscellaneous Functions of Local Authorities and the Secretary of State",
  },
  {
    key: "mental-9",
    link: "/part-vii-management-of-property-and-affairs-of-patients",
    icon: img9MentalHealthAct1983Image,
      title: "Part VII Management of Property and Affairs of Patients",
  },
  {
    key: "mental-10",
    link: "/mental-health-act-1983-part-8",
    icon: img10MentalHealthAct1983Image,
  title: "Part VIII Miscellaneous Functions of Local Authorities and the Secretary of State",
  },
  {
    key: "mental-11",
    link: "/Part-9-offences",
    icon: img11MentalHealthAct1983Image,
     title: "Part IX Offences",
  },
  {
    key: "mental-12",
    link: "/mental-health-act-1983-part-9",
    icon: img12MentalHealthAct1983Image,
    title: "Part X Miscellaneous and Supplementary",
  },
  {
    key: "mental-13",
    link: "/schedule-act-1983",
    icon: img13MentalHealthAct1983Image,
    title: "Schedule",
  }
];

const MentalHealthAct1983Page = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983PageData}
      pageTitle="Mental Health Act 1983"
      backRoute="/mental-health"
    />
  );
};

export default MentalHealthAct1983Page;
