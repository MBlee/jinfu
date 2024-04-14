import React,{useState,useEffect} from 'react';
import Routes from './router'
import store from '@/store'
import {connect} from 'react-redux'


function App(props) {

  return (
    <div className="App">
      <Routes />
    </div>
  );
}



export default connect()(App);
