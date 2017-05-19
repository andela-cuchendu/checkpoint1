/**
 * This class represents News array.
 * @class newsContainer
 * @extends {Component}
 */
class newsContainer {

/**
 * Sets news to empty array.
 * @constructor
 * @return {void}
 */
  constructor() {
    this.news = [];
  }

/**
 * This function adds news object to the news
 * array setting their properties with the parameters
 * @param {string} title - The title of the news.
 * @param {string} description - News description.
 * @param {string} meta - News meta.
 * @param {string} link - Link to the news.
 * @param {string} image - News Image.
 * @return {void}
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
 * Returns the news array.
 * @return {void}
 */
  get() {
    return this.news;
  }


}
export default newsContainer;
