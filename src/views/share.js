import React, { Component, PropTypes } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';


const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
let shareUrl;
class Share extends Component {
  constructor(props) {
    super(props);
    shareUrl = null;
  }
  render() {
    shareUrl = this.props.share;
    const title = this.props.title;

    return (
      <div className="Demo__container">
        <p>share via</p>
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon
              size={32}
              round
            />
          </FacebookShareButton>
        </div>
        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon
              size={32}
              round
            />
          </TwitterShareButton>
        </div>
        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <GooglePlusIcon
              size={32}
              round
            />
          </GooglePlusShareButton>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon
              size={32}
              round
            />
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}

Share.propTypes = {
  share: PropTypes.routes,
  title: PropTypes.routes,
};
Share.defaultProps = {
  share: null,
  title: null,
};

export default Share;

