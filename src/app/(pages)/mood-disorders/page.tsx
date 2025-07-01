import { MultiPathPage } from "@/components";
import {
  MoodDisordersImg1,
  MoodDisordersImg2,
  MoodDisordersImg3,
  MoodDisordersImg4,
} from "@/assets";
import React from "react";

const moodDisordersData = [
  {
    key: "depression",
    link: "/major-depressive-disorder",
    icon: MoodDisordersImg1,
    title: "Major Depressive Disorder(MDD)",
  },
  {
    key: "bipolar",
    link: "/bipolar-disorder",
    icon: MoodDisordersImg2,
    title: "Bipolar I & II Disorder",
  },
  {
    key: "cyclothymia",
    link: "/dysthymia-persistent-epressive-disorder",
    icon: MoodDisordersImg3,
    title: "Dysthymia (Persistent Depressive Disorder)",
  },
  {
    key: "dysthymia",
    link: "/cyclothymia",
    icon: MoodDisordersImg4,
    title: "Cyclothymia",
  },
];

const MoodDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={moodDisordersData}
      pageTitle="Mood Disorders"
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};

export default MoodDisordersPage;
