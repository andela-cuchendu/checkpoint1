import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';

import NewsSourcesStore from '../../src/stores/NewsSourcesStore';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import NewsDispatcher from '../../src/dispatcher/NewsDispatcher';


describe('NewsSourcesStore', () => {
  const errors = 'we have network error'
  NewsDispatcher.dispatch({
    eventName: NewsActionTypes.GET_ERROR,
    error: errors,
  });
  it('Should match the expected Error', () => {
    const expected = NewsSourcesStore.getError();
    expect(expected).toEqual(errors);
  });  
});
