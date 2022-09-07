import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { Table } from './pages/Table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import Signup from './pages/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/table' element={<Table/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
