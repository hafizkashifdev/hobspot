import { ContentGeneral10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentGeneral10Page = () => {
  return (
    <CommonPage
      pageTitle={`content General`}
      src={ContentGeneral10Image}
      backRoute="/content"
    />
  );
};

export default ContentGeneral10Page;
