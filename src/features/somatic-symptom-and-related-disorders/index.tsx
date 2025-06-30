import {
  IllnessAnxietyDisorderIcon,
  SomaticSymptomDisorderIcon,
} from "@/assets";
import { MultiPathPage } from "@/components";

const SomaticSymptomAndRelatedDisorders = () => {
  return (
    <MultiPathPage
      pageTitle="Somatic Symptom and Related Disorders"
      arrayData={[
        {
          key: "1",
          link: "/somatic-symptom-disorder",
          icon: SomaticSymptomDisorderIcon,
        },
        {
          key: "2",
          link: "/illness-anxiety-disorder",
          icon: IllnessAnxietyDisorderIcon,
        },
      ]}
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};

export default SomaticSymptomAndRelatedDisorders;
