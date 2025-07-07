"use client";
import { MultiPathPage } from "@/components";
import {
  img1ScheduleAct1964Image,
  img2ScheduleAct1964Image,
  img3ScheduleAct1964Image
} from "@/assets";
import React from "react";

const ScheduleAct1964PageData = [
  {
    key: "schedule-1",
    link: "/SCHEDULE 1",
    icon: img1ScheduleAct1964Image,
    title: "SCHEDULE 1",
  },
  {
    key: "schedule-2",
    link: "/SCHEDULE 1A",
    icon: img2ScheduleAct1964Image,
    title: "SCHEDULE 1A Supervision orders",
  },
  {
    key: "schedule-3",
    link: "SCHEDULE 2",
    icon: img3ScheduleAct1964Image,
    title: "SCHEDULE 2 Amendments relating to Courts-Martial",
  }
];

const ScheduleAct1964Page = () => {
  return (
    <MultiPathPage
      arrayData={ScheduleAct1964PageData}
      pageTitle="Schedule Act 1964"
      backRoute="/criminal-procedure-insanity-act-1964-section1"
    />
  );
};

export default ScheduleAct1964Page;
