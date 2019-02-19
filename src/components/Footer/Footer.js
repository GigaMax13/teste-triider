import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../../assets/images/logo.svg';
import { FooterTips } from '../FooterTips';

import './Footer.scss';


const footerTipsMock = [
  {
    title: 'E SE ALGO',
    titleHighlight: 'DER ERRADO?',
    text: 'Conte com a nossa garantia contra danos de até R$ 5.000,00.',
  },
  {
    title: 'PROFISSIONAIS',
    titleHighlight: 'VERIFICADOS',
    text: 'Verificamos <strong>antecedentes criminais</strong>, referências profissionais e muito mais.',
  },
  {
    title: 'PAGAMENTO',
    titleHighlight: 'NA PLATAFORMA',
    text: 'Pague em até 6x no seu cartão de crédito direto no app ou no site!',
  },
  {
    title: 'CENTRAL DE',
    titleHighlight: 'AJUDA',
    text: 'Te ajudamos antes, durante ou depois do seu pedido, 24 horas por dia.',
  },
];

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__tips'>
      <FooterTips tips={footerTipsMock}/>
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
