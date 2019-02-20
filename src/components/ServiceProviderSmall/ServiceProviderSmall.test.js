import React from 'react';
import { shallow } from 'enzyme';

import { ServiceProviderSmall } from './ServiceProviderSmall';

describe('ServiceProviderSmall', () => {
  it('deve renderizar o componente', () => {
    const wrapper = shallow(<ServiceProviderSmall name='Test' avatar='' ratings={0} stars={5} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('deve renderizar uma estrela vazia quando o número de stars for quatro', () => {
    const wrapper = shallow(<ServiceProviderSmall name='Test' avatar='' ratings={0} stars={4} />);

    expect(wrapper.find('.service-provider-small__star--empty').exists()).toBeTruthy();
  });

  it('deve renderizar uma meia estrela quando o decimal das stars for maior ou igual a .5', () => {
    const wrapper = shallow(<ServiceProviderSmall name='Test' avatar='' ratings={0} stars={3.5} />);

    expect(wrapper.find('.service-provider-small__star--half').exists()).toBeTruthy();
    expect(wrapper.find('.service-provider-small__star--empty').exists()).toBeTruthy();
  });
});
