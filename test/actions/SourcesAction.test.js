import React from 'react';
import { mount, mock } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import axios from 'axios';

import mockCall from '../mockedData/axios';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import NewsDispatcher from '../../src/dispatcher/NewsDispatcher';
import NewsActions from '../../src/actions/NewsActions';

describe('getSources method using Promises', () => {
  let sinonSpy;
  let sourceStub;

  beforeEach(() => {
    sourceStub = sinon.stub(axios, 'get').callsFake(mockCall.get);
    sinonSpy = sinon.spy(NewsDispatcher, 'dispatch');
  });

  afterEach(() => {
    sinonSpy.reset();
    sinonSpy.restore();
    sourceStub.restore();
  });

  it('Should call dispatch with correct arguments', () => {
    NewsActions.getSources('bbcnews').then(() => {
      expect(sinonSpy.callCount).toBe(1);
      expect(sinonSpy.firstCall.args[0].eventName).toBe(NewsActionTypes.GET_SOURCES);
      expect(sinonSpy.firstCall.args[0].newItem.length).toBe(3);
    });
  });
});

