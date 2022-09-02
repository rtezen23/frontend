import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { Table } from './pages/Table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/table' element={<Table/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
