import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { MiniCard } from "../MiniCard/MiniCard";
import { ReuseGaugeCard } from "../ReuseGaugeCard/ReuseGaugeCard";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";
import "./MiniCardRow.css";

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
  return (
    <ReuseContainer className="mini-card-row-container">
      {data.map((miniCardData) => {
        const Icon = miniCardData.icon;
        return (
          <MiniCard key={`${miniCardData.title}`}>
            <IconTitle icon={Icon} title={miniCardData.title} bold />
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
