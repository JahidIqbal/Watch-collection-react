import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Explore from './Components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/buynow/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
