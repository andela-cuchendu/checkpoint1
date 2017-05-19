/**
 * This component represents all fetched sources.
 * @class SourcesContainer
 * @extends {Component}
 */
class SourcesContainer {

/**
 * Sets sources to empty array.
 * @constructor
 * @return {void}
 */
  constructor() {
    this.sources = [];
  }

/**
 * This function adds sources object to the sources
 * array setting their properties with the parameters
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
 * Returns the sources array
 * @return {void}
 */
  get() {
    return this.sources;
  }

}

export default SourcesContainer;
