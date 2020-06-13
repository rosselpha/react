import React, { Component } from 'react';
import {connect } from 'react-redux';

import * as actions from './actions';
import About from './components/About/About'
import Home from './components/Home/Home'
import UserProfile from './components/UserPorfile/UserProfile'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

class App extends Component{

  componentDidMount(){
    this.props.fetchUser()
  }
  render(){
    return (


        <BrowserRouter>

          <Navbar/>

          <Switch> 

            <Route exact={true} path="/about" component={About}/> 
            
            <Route exact path="/user" component={UserProfile}/>

            <Route exact path="/"><Home/> </Route>
          </Switch>
        
      </BrowserRouter>


    );
  }

} 

export default connect(null, actions )(App);
