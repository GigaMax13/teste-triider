import React from 'react';
import { shallow } from 'enzyme';

import { DefaultButton } from './DefaultButton';

describe('DefaultButton', () => {
  it('deve renderizar o componente', () => {
    const wrapper = shallow(<DefaultButton text='' onClick={() => {}} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('deve apresentar o texto passado como props para o botão', () => {
    const text = 'Test';
    const wrapper = shallow(<DefaultButton text={text} onClick={() => {}} />);

    expect(wrapper.find('.default-button').text()).toBe(text);
  });

  it('deve executar a função passada por props quando o botão for clicado', () => {
    const props = {
      text: 'Test',
      onClick: jest.fn(),
    };
    const wrapper = shallow(<DefaultButton { ...props } />);

    wrapper.find('.default-button').simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });
});
