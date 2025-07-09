"use client";

import { Part3TransferToHospitalOfPrisonersEtcImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part3TransferToHospitalOfPrisonersEtcPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / Part 3 Transfer to hospital of prisoners, etc.`}
      src={Part3TransferToHospitalOfPrisonersEtcImage}
      backRoute="/schedule-act-1983"
      amendmentButtonRoute="/transfer-part-part-iii-ac"
    />
  );
};

export default Part3TransferToHospitalOfPrisonersEtcPage;
