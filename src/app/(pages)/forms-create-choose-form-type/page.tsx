import { FormsCreateChooseFormTypeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsCreateChooseFormTypePage = () => {
  return (
    <CommonPage
      pageTitle={`Create & Choose Form Type  `}
      src={FormsCreateChooseFormTypeImage}
      backRoute="/forms"
    />
  );
};

export default FormsCreateChooseFormTypePage;
