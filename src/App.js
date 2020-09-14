import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
<Header/>
<div className="app__body">
<Sidebar/>
<Feed />
{/*Wigets*/}  

</div>

 
    </div>
  );
}

export default App;
