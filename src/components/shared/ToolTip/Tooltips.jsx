import "./Tooltips.css";

export const Tooltips = (props) => {
  const { title, ...restProps } = props;

  return (
    <div id="tooltips-container" {...restProps}>
      <p id="tooltips-title">{title}</p>
      {restProps.children}
    </div>
  );
};
