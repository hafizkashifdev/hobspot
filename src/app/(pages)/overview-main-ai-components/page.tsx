import { OverviewMainAiComponentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OverviewMainAiComponentsPage = () => {
  return (
    <CommonPage
      pageTitle={`Overview: Main Ai Components`}
      src={OverviewMainAiComponentsImage}
      backRoute="/breeze-main"
    />
  );
};

export default OverviewMainAiComponentsPage;
