import { EventEmitter } from 'events';
import assign from 'object-assign';

import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const CHANGE_EVENT = 'change';

const NewsSourcesStore = assign({}, EventEmitter.prototype, {

  sources: [],
  error: '',

/* Get all sources */
  getAll() {
    return this.sources;
  },

/* Get Error */
  getError() {
    return this.error;
  },

/* Anounce Change */
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

/**
* Register callback
* @param {function} callback
*/
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

/**
* Remove callback
* @param {function} callback
*/
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

});

NewsDispatcher.register((payload) => {
  switch (payload.eventName) {

    case NewsActionTypes.GET_SOURCES:
      NewsSourcesStore.sources = payload.newItem;
      NewsSourcesStore.emitChange();
      break;
    case NewsActionTypes.GET_ERROR:
      NewsSourcesStore.error = 'we have network error';
      NewsSourcesStore.emitChange();
      break;

    default:
      return true;
  }
  return true;
});

export default NewsSourcesStore;
