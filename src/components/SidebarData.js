import React from 'react';
import * as BoxIcons from 'react-icons/bi';
//import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BoxIcons.BiBall />,
    cName: 'nav-text'
  },
  {
    title: 'Bortles Stats',
    path: '/bortles',
    icon: <BoxIcons.BiBall />,
    cName: 'nav-text'
  },
  {
    title: 'Carr Stats',
    path: '/carr',
    icon: <BoxIcons.BiBall />,
    cName: 'nav-text'
  },
  {
    title: 'Mayfield Stats',
    path: '/mayfield',
    icon: <BoxIcons.BiBall />,
    cName: 'nav-text'
  }
  
  // ,
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];