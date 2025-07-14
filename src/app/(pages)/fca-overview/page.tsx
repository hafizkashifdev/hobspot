
import { FcaOverviewImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const FcaOverviewPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / FCA Overview`}
      src={FcaOverviewImage}
      backRoute="/fca-application" 
      amendmentButtonRoute="/fca-overview-new-comparison"
      amendmentButtonTitle="View FCA Details" 
    />
  );
};

export default FcaOverviewPage;