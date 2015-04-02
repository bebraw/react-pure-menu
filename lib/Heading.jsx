'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'MenuHeading',

    render: function() {
        var {className, ...props} = this.props;

        return (
            <span className={classNames('pure-menu-heading', className)} {...props}>{props.children}</span>
        );
    },
});
