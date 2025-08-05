import { ContentWebsitePages1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentWebsitePages1Page = () => {
  return (
    <CommonPage
      pageTitle={`content Website Pages`}
      src={ContentWebsitePages1Image}
      backRoute="/content"
    />
  );
};

export default ContentWebsitePages1Page;
