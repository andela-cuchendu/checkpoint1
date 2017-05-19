import assign from 'object-assign';
import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

const NewsStore = assign({}, EventEmitter.prototype, {

  news: [],
  error: '',

 /**
   * Returns all news
   * @returns {void}
   */
  getAll() {
    return this.news;
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

    case NewsActionTypes.GET_NEWS:
      NewsStore.news = payload.news;
      NewsStore.emitChange();
      break;
    case NewsActionTypes.GET_ERROR:
      NewsStore.error = 'we have network error';
      NewsStore.emitChange();
      break;

    default:
      return true;
  }
  return true;
});

export default NewsStore;
