import { PispApiFillingInTheFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiFillingInTheFormPage = () => {
  return (
    <CommonPage
      pageTitle={"Filling in the Form"}
      src={PispApiFillingInTheFormImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiFillingInTheFormPage;
