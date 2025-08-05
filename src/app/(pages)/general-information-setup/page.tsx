import { GeneralInformationSetupImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GeneralInformationSetupPage = () => {
  return (
    <CommonPage
      pageTitle={`General Information Setup`}
      src={GeneralInformationSetupImage}
      backRoute="/breeze-main"
    />
  );
};

export default GeneralInformationSetupPage;
