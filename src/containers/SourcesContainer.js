/**
 * SourcesContainer Class
 */
class SourcesContainer {

/**
 * Class constructor
 * @return {void}
 */
  constructor() {
    this.sources = [];
  }

/**
 *
 * @param {*} id
 * @param {*} name
 * @param {*} description
 * @param {*} category
 * @param {*} sortBysAvailable
 * @return {void}
 * Add Source
 */
  add(id, name, description, category, sortBysAvailable) {
    this.sources.push({
      href: `/${id}`,
      header: name,
      description,
      category,
      title: name,
      sortBysAvailable,
    });
  }

/**
 * @return {void}
 * Get news
 */
  get() {
    return this.sources;
  }

}

export default SourcesContainer;
