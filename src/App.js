import React from 'react';
import {HashRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";

import Main from "../src/components/Main/Main";
import Footer from "../src/components/Footer/Footer";
import Welcome from "../src/components/Welcome/Welcome";
import "../src/style.css";
import Motto from "../src/components/Motto/Motto"

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/main" component={Main}/>
        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
