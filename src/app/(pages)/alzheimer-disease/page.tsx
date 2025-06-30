import { AlzheimerDiseaseImage } from "@/assets";
import { CommonPage } from "@/components";

const AlzheimerDiseasePage = () => {
  return (
    <CommonPage
      pageTitle="Mental Health / Neurocognitive Disorders / Alzheimer's Disease"
      src={AlzheimerDiseaseImage}
      backRoute="/neurocognitive-disorders"
    />
  );
};

export default AlzheimerDiseasePage;
