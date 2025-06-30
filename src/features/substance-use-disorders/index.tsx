import { AlcoholUseDisorderIcon, DrugUseDisorderIcon } from "@/assets";
import { MultiPathPage } from "@/components";

export const SubstanceUseDisorders = () => {
  return (
    <MultiPathPage
      pageTitle="Substance Use Disorders"
      arrayData={[
        {
          key: "1",
          link: "/alcohol-use-disorder",
          icon: AlcoholUseDisorderIcon,
        },
        {
          key: "2",
          link: "/drug-use-disorder",
          icon: DrugUseDisorderIcon,
        },
      ]}
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};
