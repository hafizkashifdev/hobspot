import { Section9SecurityPolicyDocumentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section9SecurityPolicyDocumentPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 9: Security Policy Document`}
      src={Section9SecurityPolicyDocumentImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default Section9SecurityPolicyDocumentPage;
