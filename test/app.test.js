import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../src/App';

describe('Main component with menu container Test via Enzyme', () => {
  const wrapper = shallow(<App />);
  it('should render a `secondry` element', () => {
    expect(wrapper.node.props.children.props.className).toBe('secondry');
  });

  it('should have a `Menu` children componet', () => {
    expect(wrapper.find('Menu').length).toBeGreaterThanOrEqualTo(1);
  });
});