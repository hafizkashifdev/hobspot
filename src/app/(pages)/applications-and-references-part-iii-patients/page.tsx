import { ApplicationsAndReferencesPartIiiPatientsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApplicationsAndReferencesPartIiiPatientsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Applications and References – Part III Patients`}
      src={ApplicationsAndReferencesPartIiiPatientsImage}
       backRoute="/mental-health-act-1983-part-v"
      amendmentButtonRoute="/part-v-amendment-comparison-3"
    />
  );
};

export default ApplicationsAndReferencesPartIiiPatientsPage;
