import { SecurityPolicyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SecurityPolicyPage = () => {
  return (
    <CommonPage
      pageTitle={`Security Policy`}
      src={SecurityPolicyImage}
      backRoute="/pisp_spi"
    />
  );
};

export default SecurityPolicyPage;
