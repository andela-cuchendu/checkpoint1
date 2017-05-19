import { EventEmitter } from 'events';
import assign from 'object-assign';

import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const CHANGE_EVENT = 'change';


const NewsSourcesStore = assign({}, EventEmitter.prototype, {

  sources: [],
  error: '',

  /**
   * Returns the state of the store
   * @returns {void}
   */
  getAll() {
    return this.sources;
  },

  /**
   * Returns the state of error
   * @returns {void}
   */
  getError() {
    return this.error;
  },

  /**
   * Anounce Change event
   * @returns {void}
   */
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

/**
 * Register lsiteners with dispatcher
 * @return {boolean}
 */

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
