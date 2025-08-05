import { Library05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library05Page = () => {
  return (
    <CommonPage
      pageTitle={`Playbooks`}
      src={Library05Image}
      backRoute="/library"
    />
  );
};

export default Library05Page;
