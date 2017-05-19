import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import News from '../../src/components/News';
import allItems from '../data/NewsData';

describe('News Component', () => {
  let wrapper;
  const sort = {params: {sort: 'top'} }
    wrapper = mount(<News sort={sort}/>);
  it('Should allows us to set props', () => {
    expect(wrapper.node.props.allItems).toBe(undefined);
    wrapper.setProps({ allItems: allItems });
    expect(wrapper.node.props.allItems).toEqual(allItems);
  });
  it('News renders Input', () => {
    const input = wrapper.find('#exampleSelect').first();
    expect(input).toExist;
    expect(input.length).toEqual(1);
  });
  it('News should have a headline div', () => {
    const newsCard = wrapper.find('.headline card').first();
    expect(newsCard).toExist;
  });  
  it('News should render state correctly', () => {
    wrapper.setState({ allItems: allItems });
    const newsCard = wrapper.mount().find('.title').first();
    const expected = '<h4 class="title card-title">Inside DevMountain’s sweet code school</h4>';
    expect(newsCard.html()).toBe(expected);
  });  
});