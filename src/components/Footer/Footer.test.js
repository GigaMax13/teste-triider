import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer';

describe('Footer', () => {
  it('deve renderizar o componente', () => {
    const wrapper = shallow(<Footer/>);

    expect(wrapper.exists()).toBeTruthy();
  });
});
