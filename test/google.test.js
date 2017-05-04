import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import google from '../src/views/googlebutton';

describe('Google component', () => {
  const wrapper2 = shallow(<google />);
  it('should have empty props', () => {
    expect(wrapper2.node.props).toEqual({});
  });
});