import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { Route } from 'react-router';
import Notfound from '../src/views/logout';
import header from '../src/components/header';


it('renders correct routes', () => {
  const wrapper = shallow(<header />);
  it('should have empty props', () => {
    expect(wrapper.node.props).toEqual({});
  });
    it('should have empty props', () => {
    expect(wrapper.node.props.length).toEqual(0);
  });
});