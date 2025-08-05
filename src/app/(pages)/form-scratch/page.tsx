import { FormScratchImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormScratchPage = () => {
  return (
    <CommonPage
      pageTitle={`Form Scratch `}
      src={FormScratchImage}
      backRoute="/workflows-main"
    />
  );
};

export default FormScratchPage;
