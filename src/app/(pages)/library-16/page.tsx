import { Library16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library16Page = () => {
  return (
    <CommonPage
      pageTitle={`Grid View`}
      src={Library16Image}
      backRoute="/library"
    />
  );
};

export default Library16Page;
