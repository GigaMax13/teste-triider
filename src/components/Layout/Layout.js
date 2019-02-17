import React from 'react';

import { Menu } from '../Menu';

export const Layout = ({ children }) => (
  <div className='layout'>
    <Menu/>
    <div className='layout__container'>
      { children }
    </div>
  </div>
);
