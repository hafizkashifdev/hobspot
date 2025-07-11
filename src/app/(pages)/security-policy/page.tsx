import { SecurityPolicyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SecurityPolicyPage = () => {
  return (
    <CommonPage
      pageTitle="Security policy"
      src={SecurityPolicyImage}
      backRoute="/semi"
    />
  );
};

export default SecurityPolicyPage;
