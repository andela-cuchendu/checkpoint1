import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import GoogleButton from '../../src/components/GoogleButton.js';

describe('GoogleButton component', () => {
  const wrapper2 = shallow(<GoogleButton />);
  it('should have a child', () => {
    expect(wrapper2.node.props.children).toBe('Sign in with google');
    
  });
  it('should have onClick function', () => {
    expect(typeof wrapper2.node.props.onClick).toBe('function');
  });  
});