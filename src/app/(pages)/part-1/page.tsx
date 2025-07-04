"use client";

import { Part1Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part1Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part (1) `}
      src={Part1Image}
      backRoute="/"
      amendmentButtonRoute="/eating-disorders"
    />
  );
};

export default Part1Page;
