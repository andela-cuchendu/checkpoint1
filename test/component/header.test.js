import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { Route } from 'react-router';
import Notfound from '../../src/components/logout';
import header from '../../src/components/header';

describe('Header component', () => {
  const wrapper = shallow(<header />);
  it('should have empty props object', () => {
    expect(wrapper.node.props).toEqual({});
  });
  it('should have render function', () => {
    expect(typeof wrapper.render).toBe('function');
  });  
});