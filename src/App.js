import { Router } from "@reach/router";
import "./App.css";
import Layout from "./components/structural/Layout";
import Home from "./pages/Home";
import DoggyView from "./pages/DoggyView";

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <DoggyView path="/dog/:breed" />
      </Router>
    </Layout>
  );
}

export default App;
