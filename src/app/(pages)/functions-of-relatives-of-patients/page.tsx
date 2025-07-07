"use client";

import { FunctionsOfRelativesOfPatientsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const FunctionsOfRelativesOfPatientsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / Functions of relatives of patients`}
      src={FunctionsOfRelativesOfPatientsImage}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-functions-of-relatives-of-patients"
    />
  );
};

export default FunctionsOfRelativesOfPatientsPage;
