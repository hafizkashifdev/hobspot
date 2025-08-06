import { LeadScoringChooseTypeCompaniesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LeadScoringChooseTypeCompaniesPage = () => {
  return (
    <CommonPage
      pageTitle={`Lead Scoring -Choose Type - Companies`}
      src={LeadScoringChooseTypeCompaniesImage}
      backRoute="/lead-scoring"
    />
  );
};

export default LeadScoringChooseTypeCompaniesPage;
