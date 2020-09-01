import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={TourList} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/tours" component={TourList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
