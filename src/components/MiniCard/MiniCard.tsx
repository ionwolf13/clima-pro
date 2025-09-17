import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import "./MiniCard.css";

export const MiniCard: React.FC<any> = (props) => {
  return (
    <ReuseContainer className="mini-card-container" shadow>
      {props.children}
    </ReuseContainer>
  );
};
