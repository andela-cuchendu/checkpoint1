/**
 * newsContainer Class
 */
class newsContainer {

/**
 * Class constructor
 * @return {void}
 */
  constructor() {
    this.news = [];
  }

/**
 *
 * @param {*} title
 * @param {*} description
 * @param {*} meta
 * @param {*} link
 * @param {*} image
 * @return {void}
 * Add News
 */
  add(title, description, meta, link, image) {
    this.news.push({
      href: link,
      header: title,
      description,
      meta,
      image,
    });
  }

/**
 * @return {void}
 * Get news
 */
  get() {
    return this.news;
  }


}
export default newsContainer;
