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
          title: "Alcohol Use Disorder",
        },
        {
          key: "2",
          link: "/drug-use-disorder",
          icon: DrugUseDisorderIcon,
          title: "Drug Use Disorder",
        },
      ]}
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};
