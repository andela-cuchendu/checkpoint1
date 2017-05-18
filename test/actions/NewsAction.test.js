import React from 'react';
import { mount, mock } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import axios from 'axios';

import mockCall from '../mockedData/axios';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import NewsDispatcher from '../../src/dispatcher/NewsDispatcher';
import NewsActions from '../../src/actions/NewsActions';

describe('getNews method using Promises', () => {
  let spyNews;
  let newsStub;
  beforeEach(() => {
    newsStub = sinon.stub(axios, 'get').callsFake(mockCall.get);
    spyNews = sinon.spy(NewsDispatcher, 'dispatch');
  });

  afterEach(() => {
    spyNews.reset();
    spyNews.restore();
    newsStub.restore();
  });

  it('Should call dispatch with correct arguments', () => {
    NewsActions.getNews('cnnnews').then(() => {
      expect(spyNews.callCount).toBe(1);
      expect(spyNews.firstCall.args[0].eventName).toBe(NewsActionTypes.GET_NEWS);
      expect(spyNews.firstCall.args[0].newItem.length).toBe(3);
    });
  });
});