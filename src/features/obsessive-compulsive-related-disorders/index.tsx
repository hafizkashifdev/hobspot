import {
  BodyDysmorphicDisordersImage,
  ObsessiveCompulsiveDisorderImage,
} from "@/assets";
import { MultiPathPage } from "@/components";

export const ObsessiveCompulsiveRelatedDisorders = () => {
  return (
    <MultiPathPage
      arrayData={[
        {
          key: "1",
          icon: ObsessiveCompulsiveDisorderImage,
          link: "/obsessive-compulsive-disorder",
          title: "Obsessive-Compulsive Disorder (OCD)",
        },
        {
          key: "2",
          icon: BodyDysmorphicDisordersImage,
          link: "/body-dysmorphic-disorder",
          title: "Body Dysmorphic Disorder (BDD)",
        },
      ]}
      pageTitle="Obsessive-Compulsive & Related Disorders"
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};
