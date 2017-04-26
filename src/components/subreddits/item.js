import PropTypes from 'prop-types';
import React from 'react';

export default class Subreddit extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    this.props.activate(this.props.url);
  }

  render() {
    return (
      <li onClick={ this.onClick.bind(this) } className={ this.props.active ? 'selected' : '' }>
        {this.props.name}
      </li>
    );
  }
}

Subreddit.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  activate: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}
