import React from 'react';
import PropTypes from 'prop-types';

import { CardLabel } from '../CardLabel';
import { DefaultButton } from '../DefaultButton';
import { ServiceProviderSmall } from '../ServiceProviderSmall';
import aguardando from '../../assets/images/aguardando.svg';

import './CardOrcamento.scss';

export const CardOrcamento = ({ name, quotes, status }) => (
  <div className='card'>
    <header className='card__header'>
      <h2 className='card__title'>
        {(() => {
          const words = name.split(' ');
          const firstLine = words.shift();
          const secondLine = <span>{words.join(' ')}</span>;
          return (
            <>
              {firstLine}
              {secondLine}
            </>
          );
        })()}
      </h2>
      <div className='card__status'>
        {(() => {
          if (status === '') {
            return <p className='card__validity'>Validade: 5 dias</p>;
          }

          return <CardLabel status={status} />;
        })()}
      </div>
    </header>
    <section className='card__body'>
      {(() => {
        if (quotes.length === 0) {
          return (
            <>
              <ul className='card__thumbnails-list'>
                <li className='card__thumbnail-item'>
                  <img className='card__thumbnail' src={aguardando} alt='Aguardando orçamentos'/>
                </li>
              </ul>
              <p className='card__budget'>Aguardando orçamentos</p>
            </>
          );
        }

        const hired = quotes.find(({ hired }) => hired === true);

        if (hired) {

          return (
            <ServiceProviderSmall { ...hired } />
          );
        }

        return (
          <>
            <ul className='card__thumbnails-list'>
              {(() => quotes.map((quote, index) => {
                const {
                  avatar,
                  name,
                } = quote;

                if (index > 2) {
                  return null;
                }

                return (
                  <li className='card__thumbnail-item' key={index}>
                    <img className='card__thumbnail' src={avatar} alt={name}/>
                  </li>
                );
              }))()}
              {(() => {
                if (quotes.length > 3) {
                  return (
                    <li className='card__thumbnail-item card__thumbnail-item--text'>
                      +{quotes.length - 3}
                    </li>
                  );
                }
              })()}
            </ul>
            <p className='card__budget'>
              Você já tem {quotes.length} orçamentos!
            </p>
          </>
        );
      })()}
    </section>
    <footer className='card__footer'>
      <DefaultButton text='VER ORÇAMENTOS' onClick={() => {}} />
    </footer>
  </div>
);

CardOrcamento.propTypes = {
  name: PropTypes.string.isRequired,
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      orderId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      ratings: PropTypes.number.isRequired,
      servicesDone: PropTypes.number.isRequired,
      hired: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  status: PropTypes.string.isRequired,
};
