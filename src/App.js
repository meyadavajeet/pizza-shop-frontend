import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policies from "./components/Policies";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route  path="/about" component={About} exact />
          <Route  path="/contact" component={Contact} exact />
          <Route  path="/policy" component={Policies} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
