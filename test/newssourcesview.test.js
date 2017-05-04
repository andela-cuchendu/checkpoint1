import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import NewsSourcesView from '../src/views/newssourcesview';

describe('NewsSourcesView Component', () => {
  
  let wrapper;
  const sources= ['Plenty news', 'NTA'];
  beforeEach(() => {
    wrapper = mount(<NewsSourcesView sources ={[]} />);
  });
 
  it('SourcesView renders Input', () => {
    const input = wrapper.find('input').first();
    expect(input.length).toEqual(1);
  });

  it('Should allow us to set props', () => {
    expect(wrapper.node.props.sources).toEqual([]);
    expect(wrapper.node.state.search).toEqual('');
    wrapper.setProps({ search: 'top' });
    expect(wrapper.node.props.search).toEqual('top');
    wrapper.setProps({ sources: sources });
    expect(wrapper.node.props.sources).toEqual(sources);
  });

  it('should render a node with className searchBar', () => {
    const component = shallow(<NewsSourcesView />);
    expect(component.find('.searchBar').length).toBe(1);
  })
});