import "./Tooltip.css";

export const Tooltip = (props) => {
  const { title, ...restProps } = props;

  return (
    <div id="tooltip" {...restProps}>
      <p id="tooltip-title">{title}</p>
      {restProps.children}
    </div>
  );
};
