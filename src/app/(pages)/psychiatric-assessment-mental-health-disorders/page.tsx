export const metadata = {
  title: "Mental Health",
  description: "Concise visual breakdowns and structured diagrams for clear, accessible insight.",
  openGraph: {
    title: "Mental Health",
    description: "Concise visual breakdowns and structured diagrams for clear, accessible insight.",
    url: "https://courthearing.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://courthearing.netlify.app/og.png",
        width: 1200,
        height: 630,
        alt: "Mental Health",
      },
    ],
  },
};


import { MultiPathPage } from "@/components";
import {
  PsychiatricAssessmentMentalHealthDisordersImg1,
  PsychiatricAssessmentMentalHealthDisordersImg2,
  PsychiatricAssessmentMentalHealthDisordersImg3,
  PsychiatricAssessmentMentalHealthDisordersImg4,
  PsychiatricAssessmentMentalHealthDisordersImg5,
  PsychiatricAssessmentMentalHealthDisordersImg6,
  PsychiatricAssessmentMentalHealthDisordersImg7,
  PsychiatricAssessmentMentalHealthDisordersImg8,
  PsychiatricAssessmentMentalHealthDisordersImg9,
  PsychiatricAssessmentMentalHealthDisordersImg10,
  PsychiatricAssessmentMentalHealthDisordersImg11,
  PsychiatricAssessmentMentalHealthDisordersImg12,
  PsychiatricAssessmentMentalHealthDisordersImg13,
  PsychiatricAssessmentMentalHealthDisordersImg14,
} from "@/assets";
import React from "react";

const PsychiatricAssessmentMentalHealthDisordersData = [
  {
    key: "disorder-1",
    link: "/mood-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg1,
    title: "Mood Disorders",
  },
  {
    key: "disorder-2",
    link: "/anxiety-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg2,
    title: "Anxiety Disorders",
  },
  {
    key: "disorder-3",
    link: "/psychotic-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg3,
    title: "Psychotic Disorders",
  },
  {
    key: "disorder-4",
    link: "/personality-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg4,
    title: "Personality Disorders",
  },
  {
    key: "disorder-5",
    link: "/obsessive-compulsive-related-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg5,
    title: "Obsessive-Compulsive & Related Disorders",
  },
  {
    key: "disorder-6",
    link: "/post-traumatic-stress-disorder",
    icon: PsychiatricAssessmentMentalHealthDisordersImg6,
    title: "Trauma and Stressor-Related Disorders",
  },
  {
    key: "disorder-7",
    link: "/neuro-developmental-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg7,
    title: "Neurodevelopmental Disorders",
  },
  {
    key: "disorder-8",
    link: "/eating-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg8,
    title: "Eating Disorders",
  },
  {
    key: "disorder-9",
    link: "/substance-use-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg9,
    title: "Substance Use Disorders",
  },
  {
    key: "disorder-10",
    link: "/sleep-wake-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg10,
    title: "Sleep-Wake Disorders",
  },
  {
    key: "disorder-11",
    link: "/neurocognitive-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg11,
    title: "Neurocognitive Disorders",
  },
  {
    key: "disorder-12",
    link: "/somatic-symptom-and-related-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg12,
    title: "Somatic Symptom and Related Disorders",
  },
  {
    key: "disorder-13",
    link: "/disruptive-impulse-control-and-conduct-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg13,
    title: "Disruptive, Impulse-Control, and Conduct Disorders",
  },
  {
    key: "disorder-14",
    link: "/paraphilic-disorders",
    icon: PsychiatricAssessmentMentalHealthDisordersImg14,
    title: "Paraphilic Disorders",
  },
];

const PsychiatricAssessmentMentalHealthDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={PsychiatricAssessmentMentalHealthDisordersData}
      pageTitle="Psychiatric Assessment & Mental Health Disorders"
      backRoute="/court-hearing"
    />
  );
};

export default PsychiatricAssessmentMentalHealthDisordersPage;
