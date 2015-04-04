'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'Menu',

    propTypes: {
        horizontal: React.PropTypes.bool,
        scrollable: React.PropTypes.bool,
    },

    getDefaultProps() {
      return {
        horizontal: false,
        scrollable: false,
      };
    },

    render: function() {
        var {className, horizontal, scrollable, ...props} = this.props;
        var horizontalClass = horizontal && 'pure-menu-horizontal';
        var scrollableClass = scrollable && 'pure-menu-scrollable';

        return (
            <div className={
                classNames('pure-menu', className, horizontalClass, scrollableClass)
            } {...props}>{props.children}</div>
        );
    },
});
