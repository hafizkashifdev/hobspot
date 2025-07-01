import {
  AnorexiaNervosaIcon,
  BingeEatingDisorderIcon,
  BulimiaNervosaIcon,
} from "@/assets";
import { MultiPathPage } from "@/components";

export const EatingDisorders = () => {
  return (
    <MultiPathPage
      arrayData={[
        {
          key: "1",
          icon: AnorexiaNervosaIcon,
          link: "/anorexia-nervosa",
          title: "Anorexia Nervosa",
        },
        {
          key: "2",
          icon: BulimiaNervosaIcon,
          link: "/bulimia-nervosa",
          title: "Bulimia Nervosa",
        },
        {
          key: "3",
          icon: BingeEatingDisorderIcon,
          link: "/binge-eating-disorder",
          title: "Binge Eating Disorder (BED)",
        },
      ]}
      pageTitle="Eating Disorders"
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};
