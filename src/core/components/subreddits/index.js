const React = require('react');

const ListingsAction = require('../../actions/listings');
const SubredditsAction = require('../../actions/subreddits');

module.exports = React.createClass({
  displayName: 'Subreddit Component',

  propTypes: {
    id: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  onClick: function() {
    SubredditsAction.setCurrentSubreddit(this.props.id);
    ListingsAction.requestSubredditListings(this.props.url);
  },

  render: function() {
    return (
      <li onClick={this.onClick} className={this.props.isSelected ? 'selected' : ''}>
        {this.props.name}
      </li>
    );
  }
});
