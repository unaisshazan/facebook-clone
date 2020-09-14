import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Wigets from './Wigets';
import Login from './Login';
import {useStateValue} from "./StateProvider"
function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
    {!user ? ( <Login/>):(
<>
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Feed />
      <Wigets/>
      
      </div> </>
      
      
    ) }

 
    </div>
  );
}

export default App;
