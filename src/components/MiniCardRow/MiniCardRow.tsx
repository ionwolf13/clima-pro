import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { MiniCard } from "../MiniCard/MiniCard";
import { CSSPropertiesType } from "../../shared/Types/cssTypes";
import { ReuseGaugeCard } from "../ReuseGaugeCard/ReuseGaugeCard";
import { NoBackgroundColor } from "../../shared/constants/colors";
import React from "react";

const styling: CSSPropertiesType = () => ({
  miniCardRowContainer: {
    width: "640px",
    borderRadius: "16px",
    backgroundColor: NoBackgroundColor,
    columnGap: "8px",
  },
});

type MiniCardData = {
  title: string;
  data: { value: number };
  valueType: string | null;
  icon: any;
};

interface MiniCardRowProps {
  data: MiniCardData[];
}

export const MiniCardRow: React.FC<MiniCardRowProps> = ({ data }) => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.miniCardRowContainer}>
      {data.map((miniCardData) => {
        const Icon = miniCardData.icon;
        return (
          <MiniCard key={`${miniCardData.title}-`}>
            <ReuseContainer
              styling={{
                backgroundColor: NoBackgroundColor,
                columnGap: "8px",
                height: "56px",
                justifyContent: "center",
              }}
            >
              <Icon
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "8px",
                  borderRadius: "32px",
                }}
              />
              <span style={{ fontSize: "x-large" }}>
                <strong>{miniCardData.title}</strong>
              </span>
            </ReuseContainer>
            <ReuseGaugeCard
              data={miniCardData.data}
              valueType={miniCardData.valueType}
            />
          </MiniCard>
        );
      })}
    </ReuseContainer>
  );
};
