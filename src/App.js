import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Component/Navigation/Navigation'
import Landing from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Project from './Component/Projects/Project'
import CopyRight from './Component/CopyRight/Copyright'
import Social from './Component/Social/Social'
class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div className="myApp">
          <Navbar />
          <Social/>
        </div>
     <Switch>
       <Route exact path="/">
         <Landing/>
       </Route>
       <Route exact path="/Project">
         <Project/>
       </Route>
       <Route exact path="/contact">
         <Contact/>
       </Route>
       <Route exact path="/about">
         <About/>
       </Route>
     </Switch>
     <CopyRight/>
     </BrowserRouter>
    );
  }
}

export default App;
