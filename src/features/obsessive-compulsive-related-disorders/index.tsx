import { BodyDysmorphicDisordersImage, ObsessiveCompulsiveDisorderImage } from "@/assets";
import { MultiPathPage } from "@/components";

export const ObsessiveCompulsiveRelatedDisorders = () => {
  return (
    <MultiPathPage
      arrayData={[
        {
          key: "1",
          icon: ObsessiveCompulsiveDisorderImage,
          link: "/obsessive-compulsive-disorder",
        },
        {
          key: "2",
          icon: BodyDysmorphicDisordersImage,
          link: "/body-dysmorphic-disorder",
        },
      ]}
      pageTitle="Obsessive-Compulsive & Related Disorders"
    />
  );
};

