import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Share from '../../src/components/share';

describe('Share component', () => {
  const wrapper = shallow(<Share title={'Testing Share Button'} share={'https://github.com'} />);

  it('should render a `Demo__container` element', () => {
    expect(wrapper.node.props.className).toBe('Demo__container');
  });

  it('should render children elements', () => {
    expect(wrapper.containsAnyMatchingElements([
      <p>share via</p>,
      <div className="Demo__some-network">
      </div>
    ])).toBe(true);
  });

  it('should pass props to children', () => {
    expect(wrapper.node.props.children[2].props.children.props['url']).toBe('https://github.com');
  });

});