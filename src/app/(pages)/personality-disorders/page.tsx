import React from "react";
import { MultiPathPage } from "@/components";
import { PersonalityDisordersImg1, PersonalityDisordersImg2 } from "@/assets";

const personalityDisordersData = [
  {
    key: "personality-1",
    link: "/borderline-personality-disorder",
    icon: PersonalityDisordersImg1,
    title: "Borderline Personality Disorder (BPD)",
  },
  {
    key: "personality-2",
    link: "antisocialpersonality-disorder",
    icon: PersonalityDisordersImg2,
    title: "Antisocial Personality Disorder (ASPD)",
  },
];

const PersonalityDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={personalityDisordersData}
      pageTitle="Personality Disorders"
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};

export default PersonalityDisordersPage;
