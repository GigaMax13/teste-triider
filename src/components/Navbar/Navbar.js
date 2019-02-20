import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserMenu } from '../UserMenu';
import logo from './../../assets/images/logo.svg';
import menu from './../../assets/images/menu.svg';
import userThumbnailMock from './../../assets/images/user_thumbnail_mock.png';

import './Navbar.scss';

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
const userNameMock = 'Juliana';

export const Navbar = () => (
  <header className='navbar'>
    <nav className='navbar__area'>
      <div className='navbar__menu-icon'>
        <img src={menu} alt="Deveria ser font icon"/>
      </div>
      <a href='https://www.triider.com.br' target='_blank' rel='noopener noreferrer' title='Triider' className='navbar__logo'>
        <img src={logo} alt="Triider"/>
      </a>
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
    </nav>
    <div className='navbar__menu-user'>
      <UserMenu name={userNameMock} thumbnail={userThumbnailMock}/>
    </div>
  </header>
);
