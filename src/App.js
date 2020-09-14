import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Wigets from './Wigets';
import Login from './Login'
function App() {
  const user = null;
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
