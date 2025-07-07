"use client";
import { MultiPathPage } from "@/components";
import {
  img1MentalHealthAct1983Part8Image,
  img2MentalHealthAct1983Part8Image,
  img3MentalHealthAct1983Part8Image,
  img4MentalHealthAct1983Part8Image
} from "@/assets";
import React from "react";

const MentalHealthAct1983Part8PageData = [
  {
    key: "mental-1",
    link: "/approved-mental-health-professionals",
    icon: img1MentalHealthAct1983Part8Image,
    title: "Approved mental health professionals",
  },
  {
    key: "mental-2",
    link: "/visiting-patients",
    icon: img2MentalHealthAct1983Part8Image,
    title: "Visiting patients",
  },
  {
    key: "mental-3",
    link: "/after-care",
    icon: img3MentalHealthAct1983Part8Image,
    title: "After-care",
  },{
    key: "mental-3",
    link: "/functions-of-the-secretary-of-states",
    icon: img4MentalHealthAct1983Part8Image,
    title: "Functions of the Secretary of State",
  }

];

const MentalHealthAct1983Part8Page = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983Part8PageData}
      pageTitle="Part VIII Miscellaneous Functions of Local Authorities and the Secretary of State"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default MentalHealthAct1983Part8Page;
