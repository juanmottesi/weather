import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import City from './components/City';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <City />
    </div>
  );
}

export default App;
