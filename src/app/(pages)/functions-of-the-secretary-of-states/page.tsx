"use client";

import { FunctionsOfTheSecretaryOfStatesImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const FunctionsOfTheSecretaryOfStatesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / Part VIII  / Functions of the Secretary of States`}
      src={FunctionsOfTheSecretaryOfStatesImage}
      backRoute="/mental-health-act-1983-part-8"
      amendmentButtonRoute="/functions-of-the-secretary-of-state"
    />
  );
};

export default FunctionsOfTheSecretaryOfStatesPage;
