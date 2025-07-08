import { DischargeOfPatientsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const DischargeOfPatientsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Discharge of Patients`}
      src={DischargeOfPatientsImage}
      backRoute="/mental-health-act-1983-part-v"
      amendmentButtonRoute="/part-v-amendment-comparison-4"
    />
  );
};

export default DischargeOfPatientsPage;
