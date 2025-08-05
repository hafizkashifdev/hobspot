import { Library17Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library17Page = () => {
  return (
    <CommonPage
      pageTitle={`Email`}
      src={Library17Image}
      backRoute="/library"
    />
  );
};

export default Library17Page;
