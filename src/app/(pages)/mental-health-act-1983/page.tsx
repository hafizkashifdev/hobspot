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
    link: "/",
    icon: img1MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 1",
  },
  {
    key: "mental-2",
    link: "/",
    icon: img2MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 2",
  },
  {
    key: "mental-3",
    link: "/",
    icon: img3MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 3",
  },
  {
    key: "mental-4",
    link: "/",
    icon: img4MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 4",
  },
  {
    key: "mental-5",
    link: "/",
    icon: img5MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 5",
  },
  {
    key: "mental-6",
    link: "/",
    icon: img6MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 6",
  },
  {
    key: "mental-7",
    link: "/",
    icon: img7MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 7",
  },
  {
    key: "mental-8",
    link: "/",
    icon: img8MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 8",
  },
  {
    key: "mental-9",
    link: "/",
    icon: img9MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 9",
  },
  {
    key: "mental-10",
    link: "/",
    icon: img10MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 10",
  },
  {
    key: "mental-11",
    link: "/",
    icon: img11MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 11",
  },
  {
    key: "mental-12",
    link: "/",
    icon: img12MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 12",
  },
  {
    key: "mental-13",
    link: "/",
    icon: img13MentalHealthAct1983Image,
    title: "Mental Health Act 1983 Item 13",
  }
];

const MentalHealthAct1983Page = () => {
  return (
    <MultiPathPage
      arrayData={MentalHealthAct1983PageData}
      pageTitle="Mental Health Act 1983"
      backRoute="/court-hearing"
    />
  );
};

export default MentalHealthAct1983Page;
