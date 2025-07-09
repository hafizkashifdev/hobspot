"use client";

import { Part3HospitalAndGuardianshipOrdersImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part3HospitalAndGuardianshipOrdersPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / Part 3 Hospital and guardianship orders`}
      src={Part3HospitalAndGuardianshipOrdersImage}
      backRoute="/schedule-act-1983"
      amendmentButtonRoute="/hospital-and-guardianship-part-iii-ac"
    />
  );
};

export default Part3HospitalAndGuardianshipOrdersPage;
