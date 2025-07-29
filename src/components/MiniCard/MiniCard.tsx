import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";

export const MiniCard: React.FC<any> = ({ title, ...props }) => {
  return (
    <ReuseContainer
      styling={{
        reuseGaugeCard: {
          flexDirection: "column",
          height: "160px",
          width: "160px",
          borderRadius: "16px",
        },
      }}
    >
      <h3>{title}</h3>
      {props.children}
    </ReuseContainer>
  );
};
