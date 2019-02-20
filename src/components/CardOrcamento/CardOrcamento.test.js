import React from 'react';
import { shallow } from 'enzyme';

import { CardOrcamento } from './CardOrcamento';
import { ServiceProviderSmall } from '../ServiceProviderSmall';

describe('CardOrcamento', () => {
  const testCaseOne = {
    name: 'Conserto de vazamento',
    status: '',
    quotes: []
  };
  const testCaseTwo = {
    name: 'Marido de aluguel',
    status: 'finalizado',
    quotes: [
      {
        id: '1',
        orderId: '1',
        name: 'Catherine',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dreizle/128.jpg',
        price: '760.00',
        stars: 5,
        ratings: 58,
        servicesDone: 85,
        hired: true
      },
      {
        id: '16',
        orderId: '1',
        name: 'Tyree',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg',
        price: '869.00',
        stars: 2.2,
        ratings: 82,
        servicesDone: 51,
        hired: false
      },
      {
        id: '2',
        orderId: '1',
        name: 'Eldred',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jeremiespoken/128.jpg',
        price: '86.00',
        stars: 4.5,
        ratings: 88,
        servicesDone: 34,
        hired: false
      }
    ]
  };
  const testCaseThree = {
   name: 'Eletricista',
   status: '',
   quotes: [
      {
       id: '1',
       orderId: '1',
       name: 'Catherine',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dreizle/128.jpg',
       price: '760.00',
       stars: 5,
       ratings: 58,
       servicesDone: 85,
       hired: false
      },
      {
       id: '16',
       orderId: '1',
       name: 'Tyree',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg',
       price: '869.00',
       stars: 2.2,
       ratings: 82,
       servicesDone: 51,
       hired: false
      },
      {
       id: '2',
       orderId: '1',
       name: 'Eldred',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jeremiespoken/128.jpg',
       price: '86.00',
       stars: 4.5,
       ratings: 88,
       servicesDone: 34,
       hired: false
      },
      {
       id: '16',
       orderId: '1',
       name: 'Tyree',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg',
       price: '869.00',
       stars: 2.2,
       ratings: 82,
       servicesDone: 51,
       hired: false
      },
      {
       id: '2',
       orderId: '1',
       name: 'Eldred',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jeremiespoken/128.jpg',
       price: '86.00',
       stars: 4.5,
       ratings: 88,
       servicesDone: 34,
       hired: false
      }
    ]
  };
  it('deve renderizar o componente', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseOne } />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('deve aprensentar o título no pedido em duas linhas', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseOne } />);

    expect(wrapper.find('.card__title').html()).toBe('<h2 class="card__title">Conserto<span>de vazamento</span></h2>');
  });

  it('deve aprensentar a validade do pedido quando status estiver em aberto', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseOne } />);

    expect(wrapper.find('.card__validity').text()).toBe('Validade: 5 dias');
  });

  it('deve aprensentar a mensagem de aguardando orçamento quando não houver orçamentos', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseOne } />);

    expect(wrapper.find('.card__budget').text()).toBe('Aguardando orçamentos');
  });

  it('deve apresentar o thumbnail de aguardando orçamento quando não houver orçamentos', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseOne } />);

    expect(wrapper.find('.card__thumbnail').html()).toBe('<img class="card__thumbnail" src="aguardando.svg" alt="Aguardando orçamentos"/>');
  });

  it('deve mostrar o profissional contratato em destaque quando houver profissional contratado', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseTwo } />);

    expect(wrapper.find('.card__body').children().first().getElement()).toEqual(<ServiceProviderSmall avatar='https://s3.amazonaws.com/uifaces/faces/twitter/dreizle/128.jpg' hired={true} id='1' name='Catherine' orderId='1' price='760.00' ratings={58} servicesDone={85} stars={5} />);
  });

  it('deve mostrar a quantidade de orçamentos existentes quando não houver profissional contratado', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseThree } />);

    expect(wrapper.find('.card__budget').text()).toBe('Você já tem 5 orçamentos!');
  });

  it('deve mostrar apenas o avatar dos três primeiros profissionais quando houver mais de três orçamentos', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseThree } />);

    expect(wrapper.find('.card__thumbnail').get(0)).toBeTruthy();
    expect(wrapper.find('.card__thumbnail').get(1)).toBeTruthy();
    expect(wrapper.find('.card__thumbnail').get(2)).toBeTruthy();
    expect(wrapper.find('.card__thumbnail').get(3)).toBeFalsy();
  });

  it('deve mostrar o indicador de quanto orçamentos a mais existe ao lado dos avatares do profissionais quando houver mais de três orçamentos', () => {
    const wrapper = shallow(<CardOrcamento { ...testCaseThree } />);

    expect(wrapper.find('.card__thumbnail-item--text').text()).toBe('+2');
  });
});
