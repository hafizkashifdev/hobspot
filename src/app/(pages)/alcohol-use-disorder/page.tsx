import { AlcoholUseDisorderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const page = () => {
  return (
    <CommonPage
      pageTitle="Mental Health / Psychiatric Assessment & Mental Health Disorders / Substance Use Disorders / Alcohol Use Disorder"
      src={AlcoholUseDisorderImage}
      backRoute="/substance-use-disorders"
    />
  );
};

export default page;
