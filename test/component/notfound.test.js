import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Notfound from '../../src/components/notfound';

describe('Not Found Component', () => {
  const wrapper = shallow(<Notfound />);
  it('should render a `App` element', () => {
      expect(wrapper.node.props.className).toBe('App');
  });

  it('should have a `App-header` children componet', () => {
      expect(wrapper.node.props.children[1].props['children']).toBe('Sorry, Page not found');
  });
});