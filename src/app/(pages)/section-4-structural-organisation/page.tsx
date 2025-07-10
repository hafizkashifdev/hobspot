import { Section4StructuralOrganisationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section4StructuralOrganisationPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 4: Structural Organisation`}
      src={Section4StructuralOrganisationImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default Section4StructuralOrganisationPage;
