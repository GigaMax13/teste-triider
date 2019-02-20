import React from 'react';
import PropTypes from 'prop-types';

import arrowDown from './../../assets/images/arrow-down.svg';

import './UserMenu.scss';

export const UserMenu = ({ name, thumbnail }) => (
  <div className='user-menu'>
    <img className='user-menu__thumbnail' src={thumbnail} alt={name}/>
    <span className='user-menu__name'>{name}</span>
    <img className='user-menu__arrow-down' src={arrowDown} alt='Deveria ser font icon' />
  </div>
);

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
