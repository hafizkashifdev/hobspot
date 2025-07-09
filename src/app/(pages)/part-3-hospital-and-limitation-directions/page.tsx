"use client";

import { Part3HospitalAndLimitationDirectionsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part3HospitalAndLimitationDirectionsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / Part 3 Hospital and limitation directions`}
      src={Part3HospitalAndLimitationDirectionsImage}
      backRoute="/schedule-act-1983"
      amendmentButtonRoute="/hospital-and-limitation-part-iii-ac"
    />
  );
};

export default Part3HospitalAndLimitationDirectionsPage;
