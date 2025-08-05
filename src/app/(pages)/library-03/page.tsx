import { Library03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library03Page = () => {
  return (
    <CommonPage
      pageTitle={`Upload Document`}
      src={Library03Image}
      backRoute="/library"
    />
  );
};

export default Library03Page;
