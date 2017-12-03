# url-pattern-match

[![NPM Version](https://img.shields.io/npm/v/url-pattern-match.svg)](https://www.npmjs.com/package/url-pattern-match)

> Super simple URL match patterns library.

## Install

```bash
$ npm install --save url-pattern-match
```

nodejs

```javascript
const match = require('url-pattern-match');
```

browsers

```html
<script src="url-pattern-match.min.js"></script>
```

## Usage

```javascript
var exam  = match('/settings/:type', '/settings/profile');
var exam1 = match('/settings/:type', '/settings/admin');

var exam2 = match('/users/:name/:type', '/users/u4bi/repos');
var exam3 = match('/users/:name/:type', '/users/u4bi/orgs');

var exam4 = match('/:name?tab=:panel', '/u4bi?tab=stars');
var exam5 = match('/:name/?tab=:panel', '/u4bi/?tab=stars');

var exam6 = match('/?name=:NAME&level=:LEVEL&weapon=:WEAPON', '/?name=u4bi&level=17&weapon=ak-47');

{
    state: true,
    children:{ 
        NAME   : 'u4bi', 
        LEVEL  : '17', 
        WEAPON : 'ak-47'
    }
}

var exam7 = match('https://:SUB_DOMAIN.github.com', 'https://api.github.com');
```

## License
[MIT](LICENSE)