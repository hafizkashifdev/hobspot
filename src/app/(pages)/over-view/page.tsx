import React from "react";
import { section10 } from "@/assets";
import { CommonPage } from "@/components";

const OverViewPage = () => {
  return (
    <div>
      <CommonPage
        pageTitle="Mental Health / Overview & Purpose "
        backRoute="/court-hearing"
        src={section10}
      />
    </div>
  );
};
export default OverViewPage;
