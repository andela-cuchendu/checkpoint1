import React from 'react';
import {
  mount
} from 'enzyme';
import expect from 'expect';

import NewsSourcesStore from '../../src/stores/NewsSourcesStore';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import NewsDispatcher from '../../src/dispatcher/NewsDispatcher';
import SourcesDataSource from '../dataStore/SourcesDataSource';


describe('NewsSourcesStore', () => {
  const errors = 'we have network error'
  it('Should match the expected Error', () => {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_ERROR,
      error: errors,
    });
    const expected = NewsSourcesStore.getError();
    expect(expected).toEqual(errors);
  });

  it('Should have empty sources', () => {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_SOURCES,
      newItem: SourcesDataSource,
    });
    const expected = NewsSourcesStore.getAll();
    expect(expected).toEqual(SourcesDataSource);
  });
});