import { ConstitutionEtcImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ConstitutionEtcPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Constitution etc`}
      src={ConstitutionEtcImage}
      backRoute="/mental-health-act-1983-part-v"
      amendmentButtonRoute="/part-v-amendment-comparison-1"
    />
  );
};

export default ConstitutionEtcPage;
