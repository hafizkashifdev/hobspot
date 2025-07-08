import { RemovalOfAliensImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const RemovalOfAliensPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / Removal of aliens`}
      src={RemovalOfAliensImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/removal-of-aliens-ac"
    />
  );
};

export default RemovalOfAliensPage;
