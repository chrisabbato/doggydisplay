import React from "react";
import Title from "./Title";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#666",
  },
};

function Header({ pages }) {
  return (
    <header style={styles.header}>
      <Title></Title>
    </header>
  );
}

export default Header;
