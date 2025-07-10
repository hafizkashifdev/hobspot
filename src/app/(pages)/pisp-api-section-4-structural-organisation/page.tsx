import { PispApiSection4StructuralOrganisationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSection4StructuralOrganisationPage = () => {
  return (
    <CommonPage
      pageTitle={"Section 4:  Structural organisation"}
      src={PispApiSection4StructuralOrganisationImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSection4StructuralOrganisationPage;
