import { Library10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library10Page = () => {
  return (
    <CommonPage
      pageTitle={`All Calls`}
      src={Library10Image}
      backRoute="/library"
    />
  );
};

export default Library10Page;
