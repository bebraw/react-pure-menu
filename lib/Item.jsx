'use strict';
var classNames = require('classnames');
var React = require('react');

module.exports = React.createClass({
    displayName: 'MenuItem',

    render: function() {
        var {className, ...props} = this.props;

        return (
            <li className={classNames('pure-menu-item', className)} {...props}>{props.children}</li>
        );
    },
});
