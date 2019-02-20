import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/fontawesome-free-regular';

import './ServiceProviderSmall.scss';

export const ServiceProviderSmall = ({ avatar, name, ratings, stars }) => (
  <div className='service-provider-small'>
    <img className='service-provider-small__thumbnail' src={avatar} alt={name} />
    <div className='service-provider-small__info'>
      <p className='service-provider-small__name'>{name}</p>
      <div className='service-provider-small__rate'>
        <ul className='service-provider-small__stars-list'>
          {(() => {
            const decimal = stars % 1;
            let showDecimal = true;
            const starsToShow = Math.floor(stars);
            const starsList = [];

            if (name === 'Leo') {
              console.log(decimal, starsToShow, stars, ratings);
            }

            for (let i = 0; i < 5; i++) {
              if (i < starsToShow) {
                starsList.push(
                  <FontAwesomeIcon
                    className='service-provider-small__star service-provider-small__star--full'
                    icon={faStar}
                  />
                );
              } else if (decimal >= 0.5 && showDecimal) {
                showDecimal = false;
                starsList.push(
                  <FontAwesomeIcon
                    className='service-provider-small__star service-provider-small__star--half'
                    icon={faStarHalfAlt}
                  />
                );
              } else {
                starsList.push(
                  <FontAwesomeIcon
                    className='service-provider-small__star service-provider-small__star--empty'
                    icon={farStar}
                  />
                );
              }
            }

            return starsList.map((star, index) => (
              <li className='service-provider-small__stars-list-item' key={index}>
                {star}
              </li>
            ));
          })()}
        </ul>
        <span className='service-provider-small__ratings'>
          ({ratings})
        </span>
      </div>
    </div>
  </div>
);

ServiceProviderSmall.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
};
