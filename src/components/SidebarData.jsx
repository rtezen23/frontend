import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {GoSignOut} from 'react-icons/go';


import './Navbar.css'

export const SidebarData = [
    {
        title: 'Login',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Personal',
        path: '/table',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear',
        path: '/signup',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <GoSignOut style={{color: '#b00'}}/>,
        cName: 'nav-text'
    },
]