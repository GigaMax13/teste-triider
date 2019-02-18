import React from 'react';
import PropTypes from 'prop-types';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './UserMenu.scss';

export const UserMenu = ({ name, thumbnail }) => (
  <div className='user-menu'>
    <img className='user-menu__thumbnail' src={thumbnail} alt={name}/>
    <span className='user-menu__name'>{name}</span>
    <FontAwesomeIcon icon={faCaretDown}/>
  </div>
);

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
