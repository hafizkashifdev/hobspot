import { Library13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library13Page = () => {
  return (
    <CommonPage
      pageTitle={`Create Playbook`}
      src={Library13Image}
      backRoute="/library"
    />
  );
};

export default Library13Page;
