import axios from 'axios';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import SourcesContainer from '../containers/SourcesContainer';
import NewsContainer from '../containers/NewsContainer';
import Api from '../utils/Api';

/**
 * NewsActions Object
 */
const NewsActions = {

/**
 * getNews Action.
 * @param {string} source - News source ID
 * @return {void}
 */
  getNews: (source) => {
    Api.addQuery('source', source);
    return axios.get(Api.getLink()).then((response) => {
      const feeds = new NewsContainer();
      const body = response.data;
      if (response.status === 200) {
        const articles = body.articles;
        articles.forEach((article) => {
          feeds.add(article.title, article.description, article.author,
          article.url, article.urlToImage);
        });
        NewsDispatcher.dispatch({
          eventName: NewsActionTypes.GET_NEWS,
          news: feeds.get(),
        });
      }
    }).catch((errors) => {
      NewsDispatcher.dispatch({
        eventName: NewsActionTypes.GET_ERROR,
        error: errors,
      });
    });
  },

/**
 * getSources Action
 * @return {void}
 */
  getSources: () => {
    const dataFeatures = new SourcesContainer();
    return axios.get(Api.apilink).then((response) => {
      if (response.status === 200) {
        const body = response.data;
        const sources = body.sources;
        sources.forEach((source) => {
          dataFeatures.add(source.id, source.name, source.description,
           source.category, source.sortBysAvailable);
        });
        NewsDispatcher.dispatch({
          eventName: NewsActionTypes.GET_SOURCES,
          newItem: dataFeatures.get(),
        });
      }
    }).catch((errors) => {
      NewsDispatcher.dispatch({
        eventName: NewsActionTypes.GET_ERROR,
        error: errors,
      });
    });
  },
};

export default NewsActions;
