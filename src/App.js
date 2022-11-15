
import './App.css';
import React from "react";
import {Routes,Route}from 'react-router-dom';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import Details from './components/Details'


function App() {
  return (
    <div className="App">
      <NavBar/>
     <br/>
      <Routes>
        <Route path='/' element={< UserList />} />
        <Route path='Details/:id' element={<Details />} />      
      </Routes>

    </div>
  );
}

export default App;
