"use client";

import { TransferToHospitalOfPrisonersEtcImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const TransferToHospitalOfPrisonersEtcPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Transfer to hospital of prisoners, etc.`}
      src={TransferToHospitalOfPrisonersEtcImage}
      backRoute="/mental-health-act-1983-part-iii"
      amendmentButtonRoute="/chap-6-amendment-comparison"
    />
  );
};

export default TransferToHospitalOfPrisonersEtcPage;
