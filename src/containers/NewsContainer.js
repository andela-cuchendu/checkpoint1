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
 * @param {string} title - The title of the news.
 * @param {string} description - News description.
 * @param {string} meta - News meta.
 * @param {string} link - Link to the news.
 * @param {string} image - News Image.
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
