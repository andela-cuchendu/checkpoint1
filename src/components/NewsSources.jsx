import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { InputGroup, Input, Card, CardText,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';
import '../../public/style.scss';
import user from '../model/user';


const history = createHistory({
  forceRefresh: true,
});

/**
 * Class for NewsSources component
 * @extends Component
 */
class NewsSources extends Component {

/* Set component state */
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

  /* @return {getItemsState} The The component state.*/
  getInitialState() {
    return this.getItemsState();
  }

/* Push user to login page if not logged in */
  componentWillMount() {
    if (!user.isLoggedin) {
      history.push('/login');
    }
  }

/* Add listener and get sources*/
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

/* Called when sources change */
  sourcesChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
      newsError: NewsSourcesStore.getError(),
    });
  }

/* Remove change listener */
  componentWillUnMount() {
    NewsSourcesStore.removeChangeListener(this.sourcesChange);
  }

/* Update view with search result */
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

/**
 * Renders component
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
