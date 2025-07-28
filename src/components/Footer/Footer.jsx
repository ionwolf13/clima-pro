import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";

const styling = () => ({
  footerContainer: {
    flexDirection: "column",
    height: "40px",
  },
});

export const Footer = () => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.footerContainer}>
      <p>Copyright © 2021 Unravel | Designed & Built by Unravel</p>
    </ReuseContainer>
  );
};
