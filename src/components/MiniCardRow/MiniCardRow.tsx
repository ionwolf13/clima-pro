import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { MiniCard } from "../MiniCard/MiniCard";
import { CSSPropertiesType } from "../../shared/Types/cssTypes";
import { ReuseGaugeCard } from "../ReuseGaugeCard/ReuseGaugeCard";
import React from "react";

const styling: CSSPropertiesType = () => ({
  miniCardRowContainer: {
    width: "500px",
    height: "200px",
    borderRadius: "16px",
    backgroundColor: "rgba(0,0,0,0)",
    columnGap: "8px",
  },
});

interface MiniCardRowProps {
  dataSetOne: { title: string; data: { value: number }; icon: any };
  dataSetTwo: { title: string; data: { value: number }; icon: any };
  dataSetThree: { title: string; data: { value: number }; icon: any };
}

export const MiniCardRow: React.FC<MiniCardRowProps> = ({
  dataSetOne,
  dataSetTwo,
  dataSetThree,
}) => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.miniCardRowContainer}>
      <MiniCard>
        <ReuseContainer
          styling={{
            backgroundColor: "rgba(0,0,0,0)",
            columnGap: "8px",
            height: "56px",
          }}
        >
          <img src={dataSetOne.icon} alt="icon" height={24} />
          <h4>{dataSetOne.title}</h4>
        </ReuseContainer>
        <ReuseGaugeCard data={dataSetOne.data} />
      </MiniCard>
      <MiniCard>
        <ReuseContainer
          styling={{
            backgroundColor: "rgba(0,0,0,0)",
            columnGap: "8px",
            height: "56px",
          }}
        >
          <img src={dataSetTwo.icon} alt="icon" height={24} />
          <h4>{dataSetTwo.title}</h4>
        </ReuseContainer>
        <ReuseGaugeCard data={dataSetTwo.data} />
      </MiniCard>
      <MiniCard>
        <ReuseContainer
          styling={{
            backgroundColor: "rgba(0,0,0,0)",
            columnGap: "8px",
            height: "56px",
          }}
        >
          <img src={dataSetThree.icon} alt="icon" height={24} />
          <h4>{dataSetThree.title}</h4>
        </ReuseContainer>
        <ReuseGaugeCard data={dataSetThree.data} />
      </MiniCard>
    </ReuseContainer>
  );
};
