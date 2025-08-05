import { ContentTemplate11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentTemplate11Page = () => {
  return (
    <CommonPage
      pageTitle={`content Template`}
      src={ContentTemplate11Image}
      backRoute="/content"
    />
  );
};

export default ContentTemplate11Page;
