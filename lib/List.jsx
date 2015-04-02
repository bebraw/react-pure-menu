'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'MenuList',

    render: function() {
        var {className, ...props} = this.props;

        return (
            <ul className={classNames('pure-menu-list', className)} {...props}>{props.children}</ul>
        );
    },
});
