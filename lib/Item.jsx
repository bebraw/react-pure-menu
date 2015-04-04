'use strict';
var classNames = require('classnames');
var React = require('react');

module.exports = React.createClass({
    displayName: 'MenuItem',

    propTypes: {
        disabled: React.PropTypes.bool,
        selected: React.PropTypes.bool,
    },

    getDefaultProps() {
      return {
        disabled: false,
        selected: false,
      };
    },

    render: function() {
        var {className, disabled, selected, ...props} = this.props;
        var disabledClass= disabled && 'pure-menu-disabled';
        var selectedClass = selected && 'pure-menu-selected';

        return (
            <li className={
                classNames('pure-menu-item', className, disabledClass, selectedClass)
            } {...props}>{props.children}</li>
        );
    },
});
