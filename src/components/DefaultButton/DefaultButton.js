import React from 'react';
import PropTypes from 'prop-types';

import './DefaultButton.scss';

export const DefaultButton = ({ text, onClick }) => (
  <button className='default-button' onClick={() => onClick()}>
    {text}
  </button>
);

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
