import firebaseApp from './firebase/config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import React, {useState} from 'react';
// import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import {Home} from "./views/Home";
import {Login} from "./views/Login";

const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = React.useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      setUser(usuarioFirebase);      
    }else {
      setUser(null);
    }


  })

  return (
    <div className="App">
      { user ? <Home user={user}/>: <Login/>}
      {/* <BrowserRouter>
        <Route exact path='/' component={Home}></Route>
      </BrowserRouter> */}
      
    </div>
  )
}

export default App;