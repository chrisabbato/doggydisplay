import React from "react";
import Title from "./Title";
// import Nav from "./Nav";

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
      {/* <Nav pages={pages}></Nav> */}
    </header>
  );
}

export default Header;
