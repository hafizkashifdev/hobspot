import { AlzheimerDiseaseIcon, ParkinsonDiseaseIcon } from "@/assets";
import { MultiPathPage } from "@/components";

export const NeurocognitiveDisorders = () => {
  return (
    <MultiPathPage
      pageTitle="Neurocognitive Disorders"
      arrayData={[
        {
          key: "1",
          link: "/alzheimer-disease",
          icon: AlzheimerDiseaseIcon,
        },
        {
          key: "2",
          link: "/parkinson-disease",
          icon: ParkinsonDiseaseIcon,
        },
      ]}
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};
