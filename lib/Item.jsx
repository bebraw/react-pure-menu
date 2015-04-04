'use strict';
var classNames = require('classnames');
var React = require('react');

module.exports = React.createClass({
    displayName: 'MenuItem',

    propTypes: {
        selected: React.PropTypes.bool,
    },

    getDefaultProps() {
      return {
        selected: false,
      };
    },

    render: function() {
        var {className, selected, ...props} = this.props;
        var selectedClass = selected && 'pure-menu-selected';

        return (
            <li className={
                classNames('pure-menu-item', className, selectedClass)
            } {...props}>{props.children}</li>
        );
    },
});
