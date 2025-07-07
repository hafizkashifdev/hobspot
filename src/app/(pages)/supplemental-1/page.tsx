"use client";

import { Supplemental1Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Supplemental1Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Supplemental 1`}
      src={Supplemental1Image}
      backRoute="/mental-health-act-1983-part-iii"
      amendmentButtonRoute="/chap-7-amendment-comparison"
    />
  );
};

export default Supplemental1Page;
