import { LeadScoringDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LeadScoringDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Lead Scoring Details`}
      src={LeadScoringDetailsImage}
      backRoute="/lead-scoring"
    />
  );
};

export default LeadScoringDetailsPage;
