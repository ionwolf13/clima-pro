import "./ReuseContainer.css";

interface ReuseContainerProps {
  clearBackground?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const ReuseContainer: React.FC<ReuseContainerProps> = (props) => {
  return (
    <div
      className={`reusable-container ${props.className} ${
        props.clearBackground ? `clear-background` : ``
      }`}
    >
      {props.children}
    </div>
  );
};
