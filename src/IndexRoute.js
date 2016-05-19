'use strict';

var React = require('react');
var ReactNative = require('react-native');

var { PropTypes } = React;
var { StyleSheet, Text } = ReactNative;

var IndexRoute = React.createClass({
  displayName: 'IndexRoute',
  propTypes: {
    name: PropTypes.string.isRequired,
    component: PropTypes.any,
    routeProps: PropTypes.object,
  },
  render() {
    return this.props.children;
  }
});

var styles = StyleSheet.create({
  hidden: {
    height: 0,
  }
});

module.exports = IndexRoute;
