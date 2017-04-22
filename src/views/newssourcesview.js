import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { InputGroup, Input, Card, CardText, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';
import '../../public/style.scss';
import user from '../model/user';


const history = createHistory({
  forceRefresh: true,
});

class NewsSourcesView extends Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      search: '',
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }
  getInitialState() {
    return this.getItemsState();
  }

  componentWillMount() {
    if (!user.isLogin) {
      history.push('/login');
    }
  }
  componentDidMount() {
    NewsSourcesStore.addChangeListener(this.onChange2);
    NewsActions.getSources();
  }

  onChange2() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
    });
  }

  getItemsState() {
    return {
      sources: NewsSourcesStore.getAll(),
    };
  }

  componentWillUnMount() {
    NewsSourcesStore.removeChangeListener(this.onChange2);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const filteredSources = this.state.sources.filter(source => source.title.toLowerCase()
    .indexOf(this.state.search.toLowerCase()) !== -1);

    return (
      <div>
        <div className="searchBar">
          <InputGroup>
            <Input
              className="input" onChange={this.updateSearch}
              placeholder="Search based on news source" value={this.state.search}
            />
          </InputGroup>
        </div>

        <Row>
          {filteredSources.map(source => (
            <Col className="tile" sm="6" xs="6" >
              <a href={`${source.href}&${source.sortBysAvailable}`} >
                <Card
                  block className="bl" color="info"
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

export default NewsSourcesView;
