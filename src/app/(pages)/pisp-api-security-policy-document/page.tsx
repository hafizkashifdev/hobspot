import { PispApiSecurityPolicyDocumentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSecurityPolicyDocumentPage = () => {
  return (
    <CommonPage
      pageTitle={"Security policy document"}
      src={PispApiSecurityPolicyDocumentImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSecurityPolicyDocumentPage;
