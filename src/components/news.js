import createHistory from 'history/createBrowserHistory';
import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import Share from './share';

import user from '../model/user';

const history = createHistory({
  forceRefresh: true,
});

/**
 * Class for News component
 * @extends Component
 */
class News extends Component {

/* Get component state*/
  static getItemsState() {
    return {
      allItems: NewsStore.getAll(),
      newsError: '',
    };
  }

/* Set component state */
  constructor() {
    super();
    this.state = {
      allItems: [],
      newsError: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

/* get component initial state */
  getInitialState() {
    return { allItems: null, newsError: '' };
  }

/* Push user to login page if not logged in */
  componentWillMount() {
    if (!user.isLoggedin) {
      history.push('/login');
    }
  }

/* Add listener and get news*/
  componentDidMount() {
    const { match } = this.props;
    NewsStore.addChangeListener(this.onChange);
    NewsActions.getNews(match.params.id);
  }

/* Remove change listener */
  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

/* Called when news change */
  onChange() {
    this.setState({ allItems: NewsStore.getAll(),
      newsError: NewsStore.getError() });
  }

/* Sort news based on selection*/
  handleSort(event) {
    const { match } = this.props;
    event.preventDefault();
    const sortValue = event.target.value;
    NewsActions.getNews(`${match.params.id}&sortBy=${sortValue}`);
  }

  render() {
    const { match } = this.props;
    const sort = match.params.sort.split(',');
    const option = sort.map(type => <option value={type} > {type} </option>);
    let renderError = '';
    if (this.state.newsError !== '') {
      renderError = (<div className="alert alert-danger">
        <strong>Error!</strong> { this.state.newsError }
      </div>);
    }
    return (
      <div>
        <div className="backwrapper">
          <a href="/" type="button" className="btn btn-default">Back</a>
        </div>
        { renderError }
        <div>
          <div className="left">
            <h1>{match.params.id}</h1>
          </div>
          <div className="right">
            <Form className="order">
              <FormGroup>
                Sort by:
                <Input
                  id="exampleSelect" name="select" onChange={this.handleSort}
                  type="select"
                >
                  {option}
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>

        <div className="clear" />

        <Row>
          {this.state.allItems.map(news => (
            <Col className="news-frame" xs="6" sm="6" md="3">
              <Card className="headline">
                <img alt="news" src={news.image} width="100%" />
                <CardBlock>
                  <CardTitle className="title">{news.meta}</CardTitle>
                  <CardSubtitle className="subtitle">{news.header}</CardSubtitle>
                </CardBlock>
                <CardBlock>
                  <CardText>{news.description}</CardText>
                  <Share title={`${news.header}`} share={`${news.href}`} />
                  <a href={news.href} rel="noopener noreferrer" target="_blank" >Read More</a>
                </CardBlock>
              </Card>
            </Col>
         ))}
        </Row>
      </div>
    );
  }

}
News.propTypes = {
  match: PropTypes.routes,
};
News.defaultProps = {
  match: { params: { sort: 'top' } },
};

export default News;
