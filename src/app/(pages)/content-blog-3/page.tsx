import { ContentBlog3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentBlog3Page = () => {
  return (
    <CommonPage
      pageTitle={`content Blog`}
      src={ContentBlog3Image}
      backRoute="/content"
    />
  );
};

export default ContentBlog3Page;
