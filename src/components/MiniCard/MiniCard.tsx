import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";

export const MiniCard: React.FC<any> = (props) => {
  return (
    <ReuseContainer
      styling={{
        flexDirection: "column",
        height: "204px",
        width: "204px",
        borderRadius: "16px",
      }}
    >
      {props.children}
    </ReuseContainer>
  );
};
