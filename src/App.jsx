import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';


const App = () => {
  return (
    <div>
      <Header />
      <Outlet />

    </div>
  );
};

export default App;