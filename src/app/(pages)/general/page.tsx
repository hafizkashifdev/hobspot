import { GeneralImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GeneralPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / General`}
      src={GeneralImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/general-ac"
    />
  );
};

export default GeneralPage;
