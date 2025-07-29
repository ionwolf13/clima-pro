import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { MiniCard } from "../MiniCard/MiniCard";
import { CSSPropertiesType } from "../../shared/Types/cssTypes";
import { ReuseGaugeCard } from "../ReuseGaugeCard/ReuseGaugeCard";
import React from "react";

const styling: CSSPropertiesType = () => ({
  miniCardRowContainer: {
    width: "50px",
    height: "200px",
  },
});

interface MiniCardRowProps {
  dataSetOne: any;
  dataSetTwo: any;
  dataSetThree: any;
}

export const MiniCardRow: React.FC<MiniCardRowProps> = ({
  dataSetOne,
  dataSetTwo,
  dataSetThree,
}) => {
  const styles = styling();

  return (
    <ReuseContainer sytling={styles.miniCardRowContainer}>
      <MiniCard>
        <ReuseGaugeCard data={dataSetOne} />
      </MiniCard>
      <MiniCard>
        <ReuseGaugeCard data={dataSetTwo} />
      </MiniCard>
      <MiniCard>
        <ReuseGaugeCard data={dataSetThree} />
      </MiniCard>
    </ReuseContainer>
  );
};
