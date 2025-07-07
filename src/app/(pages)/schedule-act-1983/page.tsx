"use client";
import { MultiPathPage } from "@/components";
import {
  img1ScheduleAct1983Image,
  img2ScheduleAct1983Image,
  img3ScheduleAct1983Image,
  img4ScheduleAct1983Image,
  img5ScheduleAct1983Image,
  img6ScheduleAct1983Image
} from "@/assets";
import React from "react";

const ScheduleAct1983PageData = [
  {
    key: "schedule-1",
    link: "/schedule-act-1983-schedule-1",
    icon: img1ScheduleAct1983Image,
    title: "Schedule I",
  },
  {
    key: "schedule-2",
    link: "/schedule-act-1983-schedule-2",
    icon: img2ScheduleAct1983Image,
    title: "Schedule  II",
  },
  {
    key: "schedule-3",
    link: "/schedule-act-1983-schedule-3",
    icon: img3ScheduleAct1983Image,
    title: "Schedule  III",
  },
  {
    key: "schedule-4",
    link: "/schedule-act-1983-schedule-4",
    icon: img4ScheduleAct1983Image,
    title: "Schedule IV",
  },
  {
    key: "schedule-5",
    link: "/schedule-act-1983-schedule-5",
    icon: img5ScheduleAct1983Image,
    title: "Schedule V",
  },
  {
    key: "schedule-6",
    link: "/schedule-act-1983-schedule-6",
    icon: img6ScheduleAct1983Image,
    title: "Schedule VI",
  }
];

const ScheduleAct1983Page = () => {
  return (
    <MultiPathPage
      arrayData={ScheduleAct1983PageData}
      pageTitle="Schedule Act 1964"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default ScheduleAct1983Page;
