import React from 'react';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import './Layout.scss';

export const Layout = ({ children }) => (
  <div className='layout'>
    <Navbar/>
    <div className='layout__container'>
      { children }
    </div>
    <Footer/>
  </div>
);
