"use client";

import { CriminalProcedureInsanityAct1965Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const CriminalProcedureInsanityAct1965Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Criminal Procedure (Insanity) Act 1964`}
      src={CriminalProcedureInsanityAct1965Image}
      backRoute="/criminal-procedure-insanity-act-1964-section1"
      amendmentButtonRoute="/criminal-procedure-insanity-act-1965-amendment-comparison"
    />
  );
};

export default CriminalProcedureInsanityAct1965Page;
