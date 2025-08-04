import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { MiniCard } from "../MiniCard/MiniCard";
import { CSSPropertiesType } from "../../shared/Types/cssTypes";
import { ReuseGaugeCard } from "../ReuseGaugeCard/ReuseGaugeCard";
import { NoBackgroundColor, IconStyle } from "../../shared/constants/css";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";
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
  icon: React.ElementType;
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
            <IconTitle icon={Icon} title={miniCardData.title} />
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
