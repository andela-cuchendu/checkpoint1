import createHistory from 'history/createBrowserHistory';
import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import Share from './Share';

import user from '../model/User';

const history = createHistory({
  forceRefresh: true,
});



/**
 * This component represents all fetched news.
 * @class News
 * @extends {Component}
 */
class News extends Component {

/**
 * This function returns the news state of the component.
 * @return {object}
 */
  static getItemsState() {
    return {
      allItems: NewsStore.getAll(),
      newsError: '',
    };
  }

/**
 * Sets the sate of component and bind the onChange and handleSort functions to the component.
 * @constructor
 * @return {void}
 */
  constructor() {
    super();
    this.state = {
      allItems: [],
      newsError: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  /**
   * First sets the component state with empty object.
   * @constructor
   * @return {object}
   */
  getInitialState() {
    return { allItems: null, newsError: '' };
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
    const { match } = this.props;
    NewsStore.addChangeListener(this.onChange);
    NewsActions.getNews(match.params.id);
  }

  /**
   * Remove onChange event listener
   * @return {void}
   */
  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }


  /**
   * Called when news state change. Set state with all news from NewsStore
   * and Error state
   * @return {void}
   */
  onChange() {
    this.setState({ allItems: NewsStore.getAll(),
      newsError: NewsStore.getError() });
  }

  /**
   * Handles news sorting based on user selection.
   * @return {void}
   */
  handleSort(event) {
    const { match } = this.props;
    event.preventDefault();
    const sortValue = event.target.value;
    NewsActions.getNews(`${match.params.id}&sortBy=${sortValue}`);
  }

/**
 * Renders the news component
 * @return {ReactElement}
 */
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
