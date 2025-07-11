"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthAct1983PartIiiImage,
  img2MentalHealthAct1983PartIiiImage,
  img3MentalHealthAct1983PartIiiImage,
  img4MentalHealthAct1983PartIiiImage,
  img5MentalHealthAct1983PartIiiImage,
  img6MentalHealthAct1983PartIiiImage,
  img7MentalHealthAct1983PartIiiImage
} from "@/assets";
import React from "react";

const MentalHealthAct1983PartIiiPageData = [
  {
    key: "mental-1",
    link: "/remands-to-hospital",
    icon: img1MentalHealthAct1983PartIiiImage,
    title: "Remands to hospital",
  },
  {
    key: "mental-2",
    link: "/hospital-and-guardianship-orders",
    icon: img2MentalHealthAct1983PartIiiImage,
    title: "Hospital and guardianship orders",
  },
  {
    key: "mental-3",
    link: "/restriction-orders",
    icon: img3MentalHealthAct1983PartIiiImage,
    title: "Restriction orders",
  },
  {
    key: "mental-4",
    link: "/hospital-and-limitation-directions",
    icon: img4MentalHealthAct1983PartIiiImage,
    title: "Hospital and limitation directions",
  },
  {
    key: "mental-5",
    link: "/detention-during-her-majesty-s-pleasure",
    icon: img5MentalHealthAct1983PartIiiImage,
    title: "Detention during Her Majesty’s pleasure",
  },
  {
    key: "mental-6",
    link: "/transfer-to-hospital-of-prisoners-etc",
    icon: img6MentalHealthAct1983PartIiiImage,
    title: "Transfer to hospital of prisoners, etc.",
  },
  {
    key: "mental-7",
    link: "/supplemental-1",
    icon: img7MentalHealthAct1983PartIiiImage,
    title: "Supplemental",
  }
];

const MentalHealthAct1983PartIiiPage = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983PartIiiPageData}
      pageTitle="Part III Patients Concerned in Criminal Proceedings or Under Sentence"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default MentalHealthAct1983PartIiiPage;
