import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

export const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();

    const showSidebar = () => setSidebar(!sidebar)

    const logout = () => {
        localStorage.setItem('token', '');
        alert('Sesión cerrada')
    };

  return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>   
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className={item.title === 'Logout' ? 'logout' : ''} onClick={item.title === 'Logout' ? logout : ()=>{}}>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}
