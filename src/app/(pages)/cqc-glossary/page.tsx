import { CqcGlossaryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CqcGlossaryPage = () => {
  return (
    <CommonPage
      pageTitle={`CQC Glossary`}
      src={CqcGlossaryImage}
      backRoute="/care-quality-commission"
    />
  );
};

export default CqcGlossaryPage;
