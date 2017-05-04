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

class NewsView extends Component {
  static getItemsState() {
    return {
      allItems: NewsStore.getAll(),
    };
  }
  constructor() {
    super();
    this.state = {
      allItems: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  getInitialState() {
    return { allItems: null };
  }

  componentWillMount() {
    if (!user.isLogin) {
      history.push('/login');
    }
  }
  componentDidMount() {
    const { match } = this.props;
    NewsStore.addChangeListener(this.onChange);
    NewsActions.getNews(match.params.id);
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({ allItems: NewsStore.getAll() });
  }

  handleSort(event) {
    const { match } = this.props;
    event.preventDefault();
    const val = event.target.value;
    NewsActions.getNews(`${match.params.id}&sortBy=${val}`);
  }

  render() {
    const { match } = this.props;
    const sort = match.params.sort.split(',');
    const option = sort.map(type => <option value={type} > {type} </option>);
    return (
      <div>
        <div>
          <div className="left">
            <h1>{match.params.id}</h1>
          </div>
          <div className="right">
            <Form className="order">
              <FormGroup>
                <Input
                  id="exampleSelect" name="select" onChange={this.handleSort}
                  type="select"
                >
                  <option>Sort News By</option>
                  {option}
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>

        <div className="clear" />

        <Row>
          {this.state.allItems.map(news => (
            <Col className="news-frame" sm="3" xs="3">
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
NewsView.propTypes = {
  match: PropTypes.routes,
};
NewsView.defaultProps = {
  match: { params: { sort: 'top' } },
};

export default NewsView;
