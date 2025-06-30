import { Schizophrenia } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SchizophreniaPage = () => {
  return (
    <CommonPage
      src={Schizophrenia}
      backRoute="/psychotic-disorders"
      pageTitle="Mental Health / Psychiatric Assessment & Mental Health Disorders / Psychotic Disorders / Schizophrenia"
    />
  );
};

export default SchizophreniaPage;
