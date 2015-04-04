[![build status](https://secure.travis-ci.org/bebraw/react-pure-menu.png)](http://travis-ci.org/bebraw/react-pure-menu)
# react-pure-menu - React wrapper for Pure menus

**react-pure-menu** provides wrapper for [Pure menu elements](http://purecss.io/menus/) making it easy to build Pure menus using React.

## Usage

```js
var Menu = require('react-pure-menu');
```

```html
<!-- accepts horizontal={true}, defaults to false (vertical) -->
<!-- accepts scrollable={true}, defaults to false -->
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
```

You can attach attributes to each component as usual. **className** won't override default Pure class so you can customize that.

> To make a horizontal menu scrollable, besides setting the flag you'll need to restrict maximum height like this (based on Pure documentation):

```css
.restricted-menu {
    height: 160px;
    width: 150px;
    border: 1px solid gray;
    border-radius: 4px;
}
```

## Development

* Linting - **npm run lint**
* Testing - **npm test** - This will lint too.
* Developing - **npm start** - This will run a server at *localhost:3000* and use Hot Module Reloading.
* Demo deployment - **npm run gh-pages** and **npm run deploy-gh-pages** - Demo will contain *README.md* by default and comes with simple styling based on Pure.

## License

react-pure-menu is available under MIT. See LICENSE for more details.

