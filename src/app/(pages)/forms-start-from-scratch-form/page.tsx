import { FormsStartFromScratchFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsStartFromScratchFormPage = () => {
  return (
    <CommonPage
      pageTitle={` Start from Scratch Form  `}
      src={FormsStartFromScratchFormImage}
      backRoute="/forms"
    />
  );
};

export default FormsStartFromScratchFormPage;
