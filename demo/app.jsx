'use strict';

var React = require('react');
var Fork = require('react-ghfork');

var readme = require('../README.md');
var pkgInfo = require('../package.json');

var Menu = require('../lib');


module.exports = React.createClass({
    displayName: 'App',

    render() {
        return (
            <div className='pure-g'>
                <Fork className='right' project={pkgInfo.user + '/' + pkgInfo.name} />
                <header className='pure-u-1'>
                    <h1>{pkgInfo.name}</h1>

                    <div className='description'>{pkgInfo.description}</div>
                </header>
                <article className='pure-u-1'>
                    <section className='demonstration'>
                        <h2>Default Menu</h2>

                        <div>
                            <Menu>
                                <Menu.Heading>Menu Heading</Menu.Heading>

                                <Menu.List>
                                    <Menu.Item selected={true}>
                                        <Menu.Link>Dashboard</Menu.Link>
                                    </Menu.Item>
                                    <Menu.Item disabled={true}>
                                        <Menu.Link>Registers</Menu.Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Menu.Link>Contracts</Menu.Link>
                                    </Menu.Item>
                                </Menu.List>
                            </Menu>
                        </div>
                    </section>

                    <section className='demonstration'>
                        <h2>Horizontal Menu</h2>

                        <div>
                            <Menu horizontal={true} scrollable={true}>
                                <Menu.List>
                                    <Menu.Item>
                                        <Menu.Link>Users</Menu.Link>
                                    </Menu.Item>
                                    <Menu.Item selected={true}>
                                        <Menu.Link>Clients</Menu.Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Menu.Link>Products</Menu.Link>
                                    </Menu.Item>
                                    <Menu.Item disabled={true}>
                                        <Menu.Link>Invoices</Menu.Link>
                                    </Menu.Item>
                                </Menu.List>
                            </Menu>
                        </div>
                    </section>

                    <section className='documentation'>
                        <h2>README</h2>

                        <div dangerouslySetInnerHTML={{__html: readme}}></div>
                    </section>
                </article>
            </div>
        );
    },
});
