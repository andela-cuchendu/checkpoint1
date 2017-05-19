import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { InputGroup, Input, Card, CardText,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';
import '../../public/style.scss';
import user from '../model/User';


const history = createHistory({
  forceRefresh: true,
});


/**
 * This class represents NewsSources
 * @class NewsSources
 * @extends {Component}
 */
class NewsSources extends Component {


/**
 * Sets the sate of component and bind the getItemsState,
 * sourcesChange and updateSearch functions to the component.
 * @constructor
 * @return {void}
 */
  constructor() {
    super();
    this.state = {
      sources: [],
      search: '',
      newsError: '',
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.sourcesChange = this.sourcesChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  /**
   * First sets the component state with empty object.
   * @constructor
   * @return {void}
   */
  getInitialState() {
    return this.getItemsState();
  }

  /**
   * Push user to login page if not logged in
   * @memberOf News
   * @return {void}
   */
  componentWillMount() {
    if (!user.isLoggedin) {
      history.push('/login');
    }
  }

  /**
   * Add onchange listener and then get news from API via action
   * @return {void}
   */
  componentDidMount() {
    NewsSourcesStore.addChangeListener(this.sourcesChange);
    NewsActions.getSources();
  }

/* Get Item state including error */
  getItemsState() {
    return {
      sources: NewsSourcesStore.getAll(),
      newsError: '',
    };
  }

  /**
   * Called when news sources state change. Set state with all news sources from SourcesStore
   * and Error state
   * @return {void}
   */
  sourcesChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
      newsError: NewsSourcesStore.getError(),
    });
  }

  /**
   * Remove onChange event listener
   * @return {void}
   */
  componentWillUnMount() {
    NewsSourcesStore.removeChangeListener(this.sourcesChange);
  }

  /**
   * Update state by taking the search value from user
   * @return {void}
   */
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

/**
 * Renders the source component
 * @return {ReactElement}
 */
  render() {
    const filteredSources = this.state.sources
      .filter(source => source.title.toLowerCase()
      .indexOf(this.state.search.toLowerCase()) !== -1);
    let renderError = '';
    if (this.state.newsError !== '') {
      renderError = (<div className="alert alert-danger">
        <strong>Error!</strong> { this.state.newsError }
      </div>);
    }
    return (
      <div className="searchContainer">
        <div className="searchBar">
          <InputGroup>
            <Input
              className="input" onChange={this.updateSearch}
              placeholder="Search based on news source" value={this.state.search}
            />
          </InputGroup>
        </div>
        { renderError }
        <Row>
          {filteredSources.map(source => (
            <Col className="tile" sm="6" xs="12" >
              <a href={`${source.href}&${source.sortBysAvailable}`} >
                <Card
                  block className="below" color="info"
                  inverse key={source.id}
                >
                  <CardTitle>{source.title}</CardTitle>
                  <CardSubtitle>Category: {source.category}</CardSubtitle>
                  <CardText>{source.description}</CardText>
                </Card>
              </a>
            </Col>
          ))}
        </Row>

      </div>
    );
  }
}

export default NewsSources;
