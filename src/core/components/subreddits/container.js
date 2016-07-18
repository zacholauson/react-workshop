const React = require('react');
const Reflux = require('reflux');

const Loading = require('../../components/loading');
const Subreddit = require('../../components/subreddits');
const SubredditsAction = require('../../actions/subreddits');
const SubredditsStore = require('../../stores/subreddits');

module.exports = React.createClass({
  displayName: 'Subreddits Container',

  mixins: [ Reflux.connect(SubredditsStore, 'subreddits') ],

  componentDidMount: function() {
    SubredditsAction.requestPopularSubreddits();
  },

  render: function() {
    var subreddits = this.state.subreddits.subreddits;

    if (subreddits === undefined) {
      return <Loading message={"Loading!"} />;
    } else {
      return(
        <div className="navigation">
          <div className="header">Navigation</div>
          <ul>
            {
              subreddits.map(function(item) {
                const isCurrentSubreddit = item.data.id === this.state.subreddits.currentSubreddit;
                return (
                  <Subreddit
                    key={item.data.id}
                    id={item.data.id}
                    isSelected={isCurrentSubreddit}
                    name={item.data.display_name}
                    url={item.data.url} />
                );
              }.bind(this))
            }
          </ul>
        </div>
      );
    }
  }
});
