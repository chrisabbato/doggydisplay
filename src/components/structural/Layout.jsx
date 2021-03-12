import React from "react";
import Header from "./Header";

const styles = {
  layout: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "100px auto",
  },
  main: {
    backgroundColor: "#DDD",
    padding: "20px",
  },
};

function Layout({ pages, children }) {
  return (
    <div style={styles.layout}>
      <Header pages={pages}></Header>
      <main style={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
