import { UnrelatedPaymentServicesSec2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UnrelatedPaymentServicesSec2Page = () => {
  return (
    <CommonPage
      pageTitle="Unrelated payment services"
      src={UnrelatedPaymentServicesSec2Image}
      backRoute="/fca-application-e-money-new-authorisation-registration-aemi"
    />
  );
};

export default UnrelatedPaymentServicesSec2Page;
