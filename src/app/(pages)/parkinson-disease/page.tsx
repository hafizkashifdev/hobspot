import { AlzheimerDiseaseImage } from "@/assets";
import { CommonPage } from "@/components";

const ParkinsonDiseasePage = () => {
  return (
    <CommonPage
      pageTitle="Mental Health / Neurocognitive Disorders / Parkinson’s Disease"
      src={AlzheimerDiseaseImage}
      backRoute="/neurocognitive-disorders"
    />
  );
};

export default ParkinsonDiseasePage;
