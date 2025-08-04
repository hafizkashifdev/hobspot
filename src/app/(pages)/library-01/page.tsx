import { Library01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library01Page = () => {
  return (
    <CommonPage
      pageTitle={`Document`}
      src={Library01Image}
      backRoute="/library"
    />
  );
};

export default Library01Page;
