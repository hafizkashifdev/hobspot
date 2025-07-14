
import React from "react";
import { CommonPage } from "@/components";
import { SpiFinalTermsInApplicationPackImage } from "@/assets";

const SpiFinalTermsInApplicationPackPage = () => {
  return (
    <CommonPage
      pageTitle={`TERMS IN APPLICATION PACK`}
      src={SpiFinalTermsInApplicationPackImage}
      backRoute="/pisp_spi"
    />
  );
};

export default SpiFinalTermsInApplicationPackPage;
