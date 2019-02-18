import React from 'react';
import { mount, shallow } from 'enzyme';

import { UserMenu } from './UserMenu';
import thumbnailMock from './../../assets/images/user_thumbnail_mock.png';

describe('UserMenu', () => {
  const name = 'Teste';

  it('deve renderizar o componente', () => {
    const wrapper = shallow(<UserMenu name={name} thumbnail={thumbnailMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('deve exibir o nome do usuário', () => {
    const wrapper = mount(<UserMenu name={name} thumbnail={thumbnailMock} />);

    expect(wrapper.props().name).toBe(name);
    expect(wrapper.find('.user-menu__name').text()).toBe(name);
  });

  it('deve exibir a thumbnail do usuário', () => {
    const wrapper = mount(<UserMenu name='Teste' thumbnail={thumbnailMock} />);

    expect(wrapper.props().thumbnail).toBe(thumbnailMock);
  });
});
