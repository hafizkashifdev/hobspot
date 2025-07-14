import { PispApiTermsInApplicationPackImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiTermsInApplicationPackPage = () => {
  return (
    <CommonPage
      pageTitle={`TERMS IN APPLICATION PACK`}
      src={PispApiTermsInApplicationPackImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiTermsInApplicationPackPage;
