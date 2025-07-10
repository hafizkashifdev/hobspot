import { TermsInApplicationPackImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TermsInApplicationPackPage = () => {
  return (
    <CommonPage
      pageTitle={`TERMS IN APPLICATION PACK`}
      src={TermsInApplicationPackImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default TermsInApplicationPackPage;
