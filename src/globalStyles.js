import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    background-color: #ddd;
    color: #222;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ul {
    text-indent: 0;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    text-indent: 0;
    padding: 0;
    margin: 0;
  }

  a:link {
    text-decoration: none;
  }

  input {
    font-size: 16px;
  }
`;

export default GlobalStyle;
