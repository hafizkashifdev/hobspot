import { ConditionsOfRegistrationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConditionsOfRegistrationPage = () => {
  return (
    <CommonPage
      pageTitle={`Conditions of Registration`}
      src={ConditionsOfRegistrationImage}
      backRoute="/pisp_spi"
    />
  );
};

export default ConditionsOfRegistrationPage;
