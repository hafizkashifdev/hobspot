import { ApplicationsAndReferencesConcerningPartIiPatientsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApplicationsAndReferencesConcerningPartIiPatientsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Applications and References Concerning Part II Patients`}
      src={ApplicationsAndReferencesConcerningPartIiPatientsImage}
    backRoute="/mental-health-act-1983-part-v"
      amendmentButtonRoute="/part-v-amendment-comparison-2"
    />
  );
};

export default ApplicationsAndReferencesConcerningPartIiPatientsPage;
