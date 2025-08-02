import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { MiniCard } from "../MiniCard/MiniCard";
import { CSSPropertiesType } from "../../shared/Types/cssTypes";
import { ReuseGaugeCard } from "../ReuseGaugeCard/ReuseGaugeCard";
import { NoBackgroundColor } from "../../shared/constants/colors";
import React from "react";

const styling: CSSPropertiesType = () => ({
  miniCardRowContainer: {
    width: "640px",
    // height: "160px",
    borderRadius: "16px",
    backgroundColor: NoBackgroundColor,
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

  const IconOne = dataSetOne.icon;
  const IconTwo = dataSetTwo.icon;
  const IconThree = dataSetThree.icon;

  return (
    <ReuseContainer styling={styles.miniCardRowContainer}>
      <MiniCard>
        <ReuseContainer
          styling={{
            backgroundColor: NoBackgroundColor,
            columnGap: "8px",
            height: "56px",
            justifyContent: "center",
          }}
        >
          <IconOne
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "8px",
              borderRadius: "32px",
            }}
          />
          <span style={{ fontSize: "x-large" }}>
            <strong>{dataSetOne.title}</strong>
          </span>
        </ReuseContainer>
        <ReuseGaugeCard data={dataSetOne.data} />
      </MiniCard>
      <MiniCard>
        <ReuseContainer
          styling={{
            backgroundColor: NoBackgroundColor,
            columnGap: "8px",
            height: "56px",
            justifyContent: "center",
          }}
        >
          <IconTwo
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "8px",
              borderRadius: "32px",
            }}
          />
          <span style={{ fontSize: "x-large" }}>
            <strong>{dataSetTwo.title}</strong>
          </span>
        </ReuseContainer>
        <ReuseGaugeCard data={dataSetTwo.data} />
      </MiniCard>
      <MiniCard>
        <ReuseContainer
          styling={{
            backgroundColor: NoBackgroundColor,
            columnGap: "8px",
            height: "56px",
            justifyContent: "center",
          }}
        >
          <IconThree
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "8px",
              borderRadius: "32px",
            }}
          />
          <span style={{ fontSize: "x-large" }}>
            <strong>{dataSetThree.title}</strong>
          </span>
        </ReuseContainer>
        <ReuseGaugeCard data={dataSetThree.data} />
      </MiniCard>
    </ReuseContainer>
  );
};
