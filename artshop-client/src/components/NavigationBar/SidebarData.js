import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  // Code for the links for side bar
  {
    title: 'Welcome',
    path: '/',
    icon: <FaIcons.FaDoorOpen />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Artists',
    path: '/artists',
    icon: <FaIcons.FaPaintBrush />,
    cName: 'nav-text'
  },
  {
    title: 'Publish Art',
    path: '/publish',
    icon: <IoIcons.IoMdSend />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoIosLogIn />,
    cName: 'nav-text'
  }
  
];