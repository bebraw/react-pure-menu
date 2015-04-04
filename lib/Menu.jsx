'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'Menu',

    propTypes: {
        horizontal: React.PropTypes.bool,
    },

    getDefaultProps() {
      return {
        horizontal: false,
      };
    },

    render: function() {
        var {className, horizontal, ...props} = this.props;
        var horizontalClass = horizontal && 'pure-menu-horizontal';

        return (
            <div className={
                classNames('pure-menu', className, horizontalClass)
            } {...props}>{props.children}</div>
        );
    },
});
