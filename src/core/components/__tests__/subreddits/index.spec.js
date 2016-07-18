jest.disableAutomock();

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const ListingsAction = require('../../../actions/listings');
const SubredditsAction = require('../../../actions/subreddits');
const Subreddit = require('../../subreddits');

describe('Subreddit', function() {
  const subreddit = {
    id: 'someId',
    name: 'someName',
    url: 'someUrl'
  };

  var subredditComponent;
  var subredditNode;

  beforeEach(function() {
    subredditComponent = TestUtils.renderIntoDocument(
      <Subreddit
        id={subreddit.id}
        isSelected={false}
        name={subreddit.name}
        url={subreddit.url} />);

    subredditNode = ReactDOM.findDOMNode(subredditComponent);
  });

  it('displays its name', function() {
    expect(subredditNode.textContent).toContain(subreddit.name);
  });

  describe('onClick', function() {
    beforeEach(function() {
      SubredditsAction.setCurrentSubreddit = jest.genMockFn();
      ListingsAction.requestSubredditListings = jest.genMockFn();

      TestUtils.Simulate.click(subredditNode);
    });

    it('triggers the ListingsAction requestSubredditListings', function() {
      expect(ListingsAction.requestSubredditListings).toBeCalledWith(subreddit.url);
    });

    it('triggers the SubredditsAction setCurrentSubreddit', function() {
      expect(SubredditsAction.setCurrentSubreddit).toBeCalledWith(subreddit.id);
    });
  });
});
