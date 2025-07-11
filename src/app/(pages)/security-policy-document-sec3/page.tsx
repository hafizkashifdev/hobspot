import { SecurityPolicyDocumentSec3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SecurityPolicyDocumentSec3Page = () => {
  return (
    <CommonPage
      pageTitle="Security policy document "
      src={SecurityPolicyDocumentSec3Image}
      backRoute="/fca-application-e-money-new-authorisation-registration-aemi"
    />
  );
};

export default SecurityPolicyDocumentSec3Page;
