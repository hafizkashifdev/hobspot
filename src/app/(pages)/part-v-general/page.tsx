import { PartVGeneralImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const PartVGeneralPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Part V General`}
      src={PartVGeneralImage}
      backRoute="/mental-health-act-1983-part-v"
      amendmentButtonRoute="/part-v-amendment-comparison-5"
    />
  );
};

export default PartVGeneralPage;
