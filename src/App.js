import { Router } from "@reach/router";
import Layout from "./components/structural/Layout";
import Home from "./pages/Home";
import Doggos from "./pages/Doggos";

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Doggos path="/dog/:breed" />
      </Router>
    </Layout>
  );
}

export default App;
