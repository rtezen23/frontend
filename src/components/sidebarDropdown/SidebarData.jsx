import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {CgPhone} from 'react-icons/cg';
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc';
import {TbSquaresDiagonal} from 'react-icons/tb';
import {VscBook} from 'react-icons/vsc';
import {BiPowerOff} from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Gestión',
    path: '#',
    icon: <CgPhone/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Mi bandeja',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />
      },
    ]
  },
  {
    title: 'Mantenimiento',
    path: '#',
    icon: <RiIcons.RiPencilRulerFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Cartera',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Cliente',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Menu',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Personal',
    path: '#',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Usuario',
        path: '/table',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Sucursal',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Horario',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Programa',
    path: '#',
    icon: <FaIcons.FaEyeDropper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Campaña',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Pago',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Cuota',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Teléfono',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Dirección',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Infoadc',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Table',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Tipología',
    path: '#',
    icon: <TbSquaresDiagonal />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Acción',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Categoría',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Efecto',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Motivo',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Contacto',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Reportes',
    path: '#',
    icon: <AiIcons.AiOutlineBarChart />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Gestión',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Pago',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Promesa',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
      {
        title: 'Asesores',
        path: '/',
        icon: <VscDebugBreakpointLogUnverified />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Changelog',
    path: '/',
    icon: <FaIcons.FaListUl />
  },
  {
    title: 'Manual',
    path: '/',
    icon: <VscBook />
  },
  {
    title: 'Salir',
    path: '/',
    icon: <BiPowerOff />
  }
];