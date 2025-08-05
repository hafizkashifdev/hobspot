import { ContentDesignManager16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentDesignManager16Page = () => {
  return (
    <CommonPage
      pageTitle={`content Design Manager`}
      src={ContentDesignManager16Image}
      backRoute="/content"
    />
  );
};

export default ContentDesignManager16Page;
