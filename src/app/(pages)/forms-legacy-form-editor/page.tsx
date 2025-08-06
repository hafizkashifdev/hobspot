import { FormsLegacyFormEditorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsLegacyFormEditorPage = () => {
  return (
    <CommonPage
      pageTitle={` Legacy Form Editor `}
      src={FormsLegacyFormEditorImage}
      backRoute="/forms"
    />
  );
};

export default FormsLegacyFormEditorPage;
