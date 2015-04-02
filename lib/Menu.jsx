'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'Menu',

    render: function() {
        var {className, ...props} = this.props;

        return (
            <div className={classNames('pure-menu', className)} {...props}>{props.children}</div>
        );
    },
});
