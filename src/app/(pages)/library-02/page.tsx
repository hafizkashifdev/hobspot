import { Library02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library02Page = () => {
  return (
    <CommonPage
      pageTitle={`Create New Folder`}
      src={Library02Image}
      backRoute="/library"
    />
  );
};

export default Library02Page;
