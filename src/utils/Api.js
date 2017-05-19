import axios from 'axios';

/**
 * Api Class used for making external calls
 */
class Api {
  constructor() {
    this.apiKey = process.env.apiKey;
    this.newsLink = 'https://newsapi.org/v1/articles?';
    this.apilink = 'https://newsapi.org/v1/sources?language=en';
    this.link = this.newsLink;
    this.result = [];
    this.hasError = false;
    this.errorMessage = '';
  }
/**
 *
 * @param {string} type - The type of query
 * @param {string} value - query value
 * @return {void}
 */
  addQuery(type, value) {
    this.link = `${this.newsLink}&${type}=${value}&apiKey=${this.apiKey}`;
  }

/**
 * @return {void}
 */
  getLink() {
    return this.link;
  }

/**
 * @return {void}
 */
  makeApiCall() {
    axios.get(this.getLink()).then((response) => {
      if (response.status === 200) {
        this.result = response.data;
      }
    })
      .catch((error) => {
        this.errorMessage = error;
      });
  }

}

export default new Api();
