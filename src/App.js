import { Router } from "@reach/router";
import Layout from "./components/structural/Layout";
import GlobalStyle from "./globalStyles";
import Doggos from "./pages/Doggos";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Layout>
        <Router>
          <Home path="/" />
          <Doggos path="/dog/:breed" />
        </Router>
      </Layout>
    </>
  );
}

export default App;
