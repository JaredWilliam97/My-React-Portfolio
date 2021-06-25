import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <NavBar />
        <div className="container">
          {/* Define routes to render different page components at different paths */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Define a route that will take in variable data */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
