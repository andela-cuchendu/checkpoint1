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
 * @param {string} id - ID of the news source.
 * @param {string} name - Name of the source.
 * @param {string} description - Source description.
 * @param {string} category - Source category.
 * @param {string} sortBysAvailable - Available sort type.
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
