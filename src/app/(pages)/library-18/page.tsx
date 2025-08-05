import { Library18Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library18Page = () => {
  return (
    <CommonPage
      pageTitle={`Meeting Scheduler`}
      src={Library18Image}
      backRoute="/library"
    />
  );
};

export default Library18Page;
