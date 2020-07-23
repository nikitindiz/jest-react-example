import React from 'react';
import { mount } from 'enzyme';
import PlayButton from './PlayButton';

describe('PlayButton', () => {
  it('Should render <button/> element', () => {
    const wrapper = mount(<PlayButton />);
    wrapper.find('button');
  });

  it('Should trigger handler function when <button/> clicked by user', () => {
    const onClickHandlerMock = jest.fn();

    const wrapper = mount(
      <PlayButton
        onClickHandler={onClickHandlerMock}
      />
    );

    expect(onClickHandlerMock).not.toHaveBeenCalled();

    wrapper.find('button').simulate('click');

    expect(onClickHandlerMock).toHaveBeenCalled();
  });

  it('Should not trigger handler function when <button/> clicked by user', () => {
    const onClickHandlerMock = jest.fn();

    mount(
      <PlayButton
        onClickHandler={onClickHandlerMock}
      />
    );

    expect(onClickHandlerMock).not.toHaveBeenCalled();
  });

  it('Should render &gt; inside of the button', () => {
    const wrapper = mount(
      <PlayButton />
    );

    expect(wrapper.text()).toBe('>');
  })
});