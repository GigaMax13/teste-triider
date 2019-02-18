import React from 'react';

import { Navbar } from '../Navbar';

import './Layout.scss';

export const Layout = ({ children }) => (
  <div className='layout'>
    <Navbar/>
    <div className='layout__container'>
      { children }
    </div>
  </div>
);
