import { ContentHubdb12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentHubdb12Page = () => {
  return (
    <CommonPage
      pageTitle={`content HubDB`}
      src={ContentHubdb12Image}
      backRoute="/content"
    />
  );
};

export default ContentHubdb12Page;
