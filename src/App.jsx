import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { Table } from './pages/Table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import Signup from './pages/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';
import Sidebar from './components/sidebarDropdown/Sidebar';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports';
import Team from './pages/Team';

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Sidebar/>
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/table' element={<Table/>}/>
            </Route>
            {/* new */}
            <Route path='/overview' exact element={Overview} />
        <Route path='/reports' exact element={Reports} />
        <Route path='/reports/reports1' exact element={ReportsOne} />
        <Route path='/reports/reports2' exact element={ReportsTwo} />
        <Route path='/reports/reports3' exact element={ReportsThree} />
        <Route path='/team' exact element={Team} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
