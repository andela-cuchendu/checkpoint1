import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import NewsSources from '../../src/components/NewsSources';
import sources from '../dataStore/SourcesDataSource.js';

describe('NewsSources Component', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NewsSources sources ={[]} />);
  });
  let wrapper2 = mount(<NewsSources />);
  wrapper2.setState({ sources: sources });
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
    const component = shallow(<NewsSources />);
    expect(component.find('.searchBar').length).toBe(1);
  })
  it('Sources should render state correctly', () => {
    wrapper.setState({ sources: sources });
    const newsCard = wrapper.mount().find('.card-title').first();
    const expected = '<h4 class="card-title">ABC News (AU)</h4>';
    expect(newsCard.html()).toBe(expected);
  });    
});