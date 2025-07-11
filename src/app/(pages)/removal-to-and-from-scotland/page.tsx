import { RemovalToAndFromScotlandImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const RemovalToAndFromScotlandPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VI / Removal to and from Scotland`}
      src={RemovalToAndFromScotlandImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/removal-to-and-from-scotland-ac"
    />
  );
};

export default RemovalToAndFromScotlandPage;
