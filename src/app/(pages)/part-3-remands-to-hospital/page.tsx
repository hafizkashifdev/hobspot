"use client";

import { Part3RemandsToHospitalImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part3RemandsToHospitalPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / Part 3 Remands to hospital`}
      src={Part3RemandsToHospitalImage}
      backRoute="/schedule-act-1983"
      amendmentButtonRoute="/remands-to-part-iii-ac"
    />
  );
};

export default Part3RemandsToHospitalPage;
