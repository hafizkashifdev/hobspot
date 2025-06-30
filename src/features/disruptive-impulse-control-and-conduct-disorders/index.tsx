import { ConductDisorderIcon, OppositionalDefiantDisorderIcon } from "@/assets";
import { MultiPathPage } from "@/components";

const DisruptiveImpulseControlAndConductDisorders = () => {
  return (
    <MultiPathPage
      pageTitle="Disruptive, Impulse-Control, and Conduct Disorders"
      arrayData={[
        {
          key: "1",
          link: "/oppositional-defiant-disorder",
          icon: OppositionalDefiantDisorderIcon,
        },
        {
          key: "2",
          link: "/conduct-disorder",
          icon: ConductDisorderIcon,
        },
      ]}
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};

export default DisruptiveImpulseControlAndConductDisorders;
