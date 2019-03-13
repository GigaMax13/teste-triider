import React from 'react';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import './Layout.scss';

export const Layout = ({ children }) => (
  <main className='layout'>
    <Navbar/>
    <div className='layout__container'>
      { children }
    </div>
    <Footer/>
  </main>
);
