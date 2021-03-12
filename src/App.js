import { Router } from "@reach/router";
import "./App.css";
import Layout from "./components/structural/Layout";
import Home from "./pages/Home";
import Breed from "./pages/Breed";

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Breed path="/breed" />
      </Router>
    </Layout>
  );
}

export default App;
