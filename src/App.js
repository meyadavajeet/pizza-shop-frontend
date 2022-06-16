import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policies from "./components/Policies";
import NavBar from './components/NavBar';
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/policy" component={Policies} exact />
          <Route path="/cart" component={CartScreen} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
