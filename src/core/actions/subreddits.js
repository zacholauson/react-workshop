'use strict';

const Reflux = require('reflux');

module.exports = Reflux.createActions([
  'requestPopularSubreddits',
  'setCurrentSubreddit',
  'storeSubreddits'
]);
