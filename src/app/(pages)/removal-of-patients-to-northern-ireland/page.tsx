import { RemovalOfPatientsToNorthernIrelandImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const RemovalOfPatientsToNorthernIrelandPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VI / Removal of patients to Northern Ireland`}
      src={RemovalOfPatientsToNorthernIrelandImage}
      backRoute="/mental-health-act-1983-part-6"
      amendmentButtonRoute="/removal-of-patients-to-northern-ireland-ac"
    />
  );
};

export default RemovalOfPatientsToNorthernIrelandPage;
