import { Library14Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library14Page = () => {
  return (
    <CommonPage
      pageTitle={`Create snippet`}
      src={Library14Image}
      backRoute="/library"
    />
  );
};

export default Library14Page;
