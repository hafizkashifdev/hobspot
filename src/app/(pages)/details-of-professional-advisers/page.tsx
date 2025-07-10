import { DetailsOfProfessionalAdvisersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DetailsOfProfessionalAdvisersPage = () => {
  return (
    <CommonPage
      pageTitle={`Details of professional advisers`}
      src={DetailsOfProfessionalAdvisersImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default DetailsOfProfessionalAdvisersPage;
