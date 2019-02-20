import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CardLabel.scss';

export const CardLabel = ({ status }) => (
  <div
    className={classNames('card-label', {
      'card-label--cancelado': status === 'cancelado',
      'card-label--finalizado': status === 'finalizado',
      'card-label--contratado': status === 'contratado',
    })}
  >
    {status}
  </div>
);

CardLabel.propTypes = {
  status: PropTypes.string.isRequired,
};
