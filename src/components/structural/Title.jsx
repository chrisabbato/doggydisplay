import React from "react";
import { Link } from "@reach/router";

const styles = {
  title: {
    paddingLeft: "1rem",
  },
};

function Title() {
  return (
    <h1 style={styles.title}>
      <Link to="/">Doggy Display</Link>
    </h1>
  );
}

export default Title;
