import PropTypes from 'prop-types';
import React from 'react';
import Subreddit from './item';

export default class SubredditsContainer extends React.Component {
  renderSubreddits(subreddits) {
    return subreddits.map(item => {
      return (
        <Subreddit
          activate={this.props.setActiveSubreddit}
          key={item.data.id}
          name={item.data.display_name}
          url={item.data.url}
          active={item.data.url === this.props.activeSubreddit} />
      );
    });
  }

  render() {
    return(
      <div className="navigation">
        <div className="header">Navigation</div>
        <ul>
          { this.renderSubreddits(this.props.subreddits) }
        </ul>
      </div>
    );
  }
}

SubredditsContainer.propTypes = {
  activeSubreddit: PropTypes.string.isRequired,
  subreddits: PropTypes.array.isRequired,
  setActiveSubreddit: PropTypes.func.isRequired
}
