import PropTypes from 'prop-types';
import React from 'react';

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1> {this.props.activeSubreddit} </h1>
    );
  }
}

HeaderContainer.propTypes = {
  activeSubreddit: PropTypes.string.isRequired
}
