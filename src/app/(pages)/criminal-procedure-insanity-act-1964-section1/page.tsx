"use client";
import { MultiPathPage } from "@/components";
import {
  img1CriminalProcedureInsanityAct1964Image,
  img2CriminalProcedureInsanityAct1964Image
} from "@/assets";
import React from "react";

const CriminalProcedureInsanityAct1964PageData = [
  {
    key: "criminal-1",
    link: "/criminal-procedure-insanity-act-1965",
    icon: img1CriminalProcedureInsanityAct1964Image,
    title: "Criminal Procedure (Insanity) Act 1964",
  },
  {
    key: "criminal-2",
    link: "/schedule-act-1964",
    icon: img2CriminalProcedureInsanityAct1964Image,
    title: "Schedule",
  }
];

const CriminalProcedureInsanityAct1964Page = () => {
  return (
    <MultiPathPage
      arrayData={CriminalProcedureInsanityAct1964PageData}
      pageTitle="Criminal Procedure (Insanity) Act 1964"
      backRoute="/mental-health"
    />
  );
};

export default CriminalProcedureInsanityAct1964Page;
