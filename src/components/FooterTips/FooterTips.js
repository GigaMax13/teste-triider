import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { NavLink } from 'react-router-dom';

import './FooterTips.scss';

export const FooterTips = ({ tips }) => (
  <ul className='footer-tips'>
    {(() => tips.map(({ title, titleHighlight, text }, index) => (
      <li className='footer-tips__item' key={index}>
        <h3 className='footer-tips__title'>{title} <span className='title__highlight'>{titleHighlight}</span></h3>
        <p className='footer-tips__text'>{ReactHtmlParser(text)}</p>
        <NavLink className='footer-tips__link' to='/'>SAIBA MAIS</NavLink>
      </li>
    )))()}
  </ul>
);

FooterTips.propTypes = {
  tips: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      titleHighlight: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
