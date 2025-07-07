"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthAct1983PartIiImage,
  img2MentalHealthAct1983PartIiImage,
  img3MentalHealthAct1983PartIiImage,
  img4MentalHealthAct1983PartIiImage,
  img5MentalHealthAct1983PartIiImage,
  img6MentalHealthAct1983PartIiImage,
  img7MentalHealthAct1983PartIiImage,
  img8MentalHealthAct1983PartIiImage
} from "@/assets";
import React from "react";

const MentalHealthAct1983PartIiPageData = [
  {
    key: "mental-1",
    link: "/procedure-for-hospital-admission",
    icon: img1MentalHealthAct1983PartIiImage,
    title: "Procedure for hospital admission",
  },
  {
    key: "mental-2",
    link: "/guardianship",
    icon: img2MentalHealthAct1983PartIiImage,
    title: "Guardianship",
  },
  {
    key: "mental-3",
    link: "/general-provisions-as-to-applications-and-recommendations",
    icon: img3MentalHealthAct1983PartIiImage,
    title: "General provisions as to applications and recommendations",
  },
  {
    key: "mental-4",
    link: "/position-of-patients-subject-to-detention-or-guardianship",
    icon: img4MentalHealthAct1983PartIiImage,
    title: "Position of patients subject to detention or guardianship",
  },
  {
    key: "mental-5",
    link: "/duration-of-detention-or-guardianship-and-discharge",
    icon: img5MentalHealthAct1983PartIiImage,
    title: "Duration of detention or guardianship and discharge",
  },
  {
    key: "mental-6",
    link: "/after-care-under-supervision",
    icon: img6MentalHealthAct1983PartIiImage,
    title: "After-care under supervision",
  },
  {
    key: "mental-7",
    link: "/functions-of-relatives-of-patients",
    icon: img7MentalHealthAct1983PartIiImage,
    title: "Functions of relatives of patients",
  },
  {
    key: "mental-8",
    link: "/part-27",
    icon: img8MentalHealthAct1983PartIiImage,
    title: "Supplemental",
  }
];

const MentalHealthAct1983PartIiPage = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983PartIiPageData}
      pageTitle="Part II Compulsory Admission to Hospital and Guardianship"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default MentalHealthAct1983PartIiPage;
