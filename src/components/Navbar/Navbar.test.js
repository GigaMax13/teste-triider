import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('deve renderizar o componente', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper.exists()).toBeTruthy();
  });
});
