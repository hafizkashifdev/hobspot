import { FcaOverviewImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const FcaOverviewPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / FCA Overview`}
      src={FcaOverviewImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/removal-to-and-from-scotland-ac"
    />
  );
};

export default FcaOverviewPage;
