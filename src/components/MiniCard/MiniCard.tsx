import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";

export const MiniCard: React.FC<any> = (props) => {
  return (
    <ReuseContainer
      styling={{
        flexDirection: "column",
        height: "160px",
        width: "160px",
        borderRadius: "16px",
      }}
    >
      {props.children}
    </ReuseContainer>
  );
};
