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
        },
        {
          key: "2",
          icon: BulimiaNervosaIcon,
          link: "/bulimia-nervosa",
        },
        {
          key: "3",
          icon: BingeEatingDisorderIcon,
          link: "/binge-eating-disorder",
        },
      ]}
      pageTitle="Eating Disorders"
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};
