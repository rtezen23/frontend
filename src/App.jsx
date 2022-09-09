import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { Table } from './pages/Table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';
import Sidebar from './components/sidebarDropdown/Sidebar';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports';
import Team from './pages/Team';
import { SheetJS } from './components/SheetJS';

function App() {

  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/table' element={<Table/>}/>
            </Route>
            {/* new */}
            <Route path='/excel' element={<SheetJS/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
