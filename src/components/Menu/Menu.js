import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Menu.scss';

import logo from './../../assets/images/logo.png';

const navbarItems = [
  {
    text: 'Início',
    href: '/',
  },
  {
    text: 'Catálogo de serviços',
    href: '/',
  },
  {
    text: 'Meus orçamentos',
    href: '/meus-orcamentos',
  },
  {
    text: 'Mensagens (4)',
    href: '/',
  },
  {
    text: 'Ajuda',
    href: '/',
  }
];

export const Menu = () => (
  <div className='navbar'>
    <div className='navbar__area'>
      <div className='navbar__menu-icon'>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <img className='navbar__logo' src={logo} alt="Triider"/>
      <ul className='navbar__list'>
        {(() => navbarItems.map(({ href, text }, index) => {
          return (
            <li className='navbar__item' key={index}>
              <NavLink
                exact
                activeClassName="navbar__link--active"
                className='navbar__link'
                to={href}
              >
                {text}
              </NavLink>
            </li>
          );
        }))()}
      </ul>
    </div>
    <div className='navbar__menu-user'>

    </div>
  </div>
);
