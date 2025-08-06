import { LeadScoringChooseTypeContactsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LeadScoringChooseTypeContactsPage = () => {
  return (
    <CommonPage
      pageTitle={`Lead Scoring-Choose Type - Contacts`}
      src={LeadScoringChooseTypeContactsImage}
      backRoute="/lead-scoring"
    />
  );
};

export default LeadScoringChooseTypeContactsPage;
