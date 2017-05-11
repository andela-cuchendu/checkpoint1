import axios from 'axios';

class Api {
  constructor() {
    this.apiKey = process.env.apiKey || '213327409d384371851777e7c7f78dfe';
    this.newsLink = 'https://newsapi.org/v1/articles?';
    this.apilink = 'https://newsapi.org/v1/sources?language=en';
    this.link = this.newsLink;
    this.result = [];
    this.hasError = false;
    this.errorMessage = '';
  }

  addQuery(type, value) {
    this.link = `${this.newsLink}&${type}=${value}&apiKey=${this.apiKey}`;
  }

  getLink() {
    return this.link;
  }

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
