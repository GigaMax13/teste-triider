import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../../assets/images/logo.svg';

import './Footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__cards'>

    </div>
    <div className='footer__area'>
      <img className='footer__logo' src={logo} alt="Triider"/>
      <ul className='footer__list'>
        <li className='footer__item'>
          <NavLink className='footer__link' to='/'>
            Central de Ajuda
          </NavLink>
        </li>
        <li className='footer__item'>
          <NavLink className='footer__link' to='/'>
            Termos de uso
          </NavLink>
        </li>
        <li className='footer__item'>
          <NavLink className='footer__link' to='/'>
            Código de conduta
          </NavLink>
        </li>
      </ul>
    </div>
  </footer>
);
