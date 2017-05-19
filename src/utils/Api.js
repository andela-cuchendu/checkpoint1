import axios from 'axios';

/**
 * This class is used for API calls
 * @class User
 */
class Api {
/**
 * Initializes the API links.
 * @constructor
 * @return {void}
 */
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
 * Builds the call link with query string
 * @param {string} type - The type of query
 * @param {string} value - query value
 * @return {void}
 */
  addQuery(type, value) {
    this.link = `${this.newsLink}&${type}=${value}&apiKey=${this.apiKey}`;
  }

/**
 * Gets the built URL for API calls
 * @return {string} - Returns the built URL as string
 */
  getLink() {
    return this.link;
  }

/**
 * Makes API call and stores the outcome.
 * It stores the result in result if successful
 * or errorMessage if not successful
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
