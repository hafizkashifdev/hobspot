import { PispApiSection14Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSection14Page = () => {
  return (
    <CommonPage
      pageTitle={"Identity and suitability assessment of persons with qualifying holdings in the applicant"}
      src={PispApiSection14Image}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSection14Page;
