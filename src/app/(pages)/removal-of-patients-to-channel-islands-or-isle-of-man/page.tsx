import { RemovalOfPatientsToChannelIslandsOrIsleOfManImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const RemovalOfPatientsToChannelIslandsOrIsleOfManPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VI / Removal of patients to Channel Islands or Isle of Man`}
      src={RemovalOfPatientsToChannelIslandsOrIsleOfManImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/removal-of-patients-to-channel-islands-or-isle-of-man-ac"
    />
  );
};

export default RemovalOfPatientsToChannelIslandsOrIsleOfManPage;
