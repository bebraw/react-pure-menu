'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'MenuLink',

    render: function() {
        var {className, ...props} = this.props;

        return (
            <a className={classNames('pure-menu-link', className)} {...props}>
                {props.children}
            </a>
        );
    },
});
