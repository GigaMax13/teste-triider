import React from 'react';
import { shallow } from 'enzyme';

import { FooterTips } from './FooterTips';

describe('FooterTips', () => {
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

  it('deve renderizar o componente', () => {
    const wrapper = shallow(<FooterTips tips={footerTipsMock}/>);

    expect(wrapper.exists()).toBeTruthy();
  });
});
