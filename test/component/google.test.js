import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import google from '../../src/components/googlebutton';

describe('Google component', () => {
  const wrapper2 = shallow(<google />);
  it('should have empty props', () => {
    expect(wrapper2.node.props).toEqual({});
  });
  it('should have render function', () => {
    expect(typeof wrapper2.render).toBe('function');
  });  
});