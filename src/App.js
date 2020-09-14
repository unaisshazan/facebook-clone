import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Wigets from './Wigets';
function App() {
  const user = null;
  return (
    <div className="app">
    {!user ? ( <h1>Login</h1>):(
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
