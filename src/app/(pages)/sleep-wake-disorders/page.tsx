import { SleepWakeDisordersImg1, SleepWakeDisordersImg2 } from "@/assets";
import { MultiPathPage } from "@/components";
import React from "react";

const sleepWeekData = [
  {
    key: "Insomnia",
    link: "/Insomnia",
    icon: SleepWakeDisordersImg1,
    title: "Insomnia",
  },
  {
    key: "narcolepsy",
    link: "/narcolepsy",
    icon: SleepWakeDisordersImg2,
    title: "Narcolepsy",
  },
];

const SleepWakeDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={sleepWeekData}
      pageTitle="Sleep-Wake Disorders"
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};

export default SleepWakeDisordersPage;
