import React from 'react';
import { shallow } from 'enzyme';

import { CardLabel } from './CardLabel';

describe('CardLabel', () => {
  it('deve renderizar o componente', () => {
    const wrapper = shallow(<CardLabel status='' />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('deve renderizar a label com estilo de cancelado', () => {
    const wrapper = shallow(<CardLabel status='cancelado' />);

    expect(wrapper.find('.card-label--cancelado').exists()).toBeTruthy();
  });

  it('deve renderizar a label com estilo de finalizado', () => {
    const wrapper = shallow(<CardLabel status='finalizado' />);

    expect(wrapper.find('.card-label--finalizado').exists()).toBeTruthy();
  });

  it('deve renderizar a label com estilo de finalizado', () => {
    const wrapper = shallow(<CardLabel status='finalizado' />);

    expect(wrapper.find('.card-label--finalizado').exists()).toBeTruthy();
  });
});
