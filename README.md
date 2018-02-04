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
var exam  = match('http://example.com/settings/:type', 'http://example.com/settings/profile');
var exam1 = match('http://example.com/settings/:type', 'http://example.com/settings/admin');

var exam2 = match('http://example.com/users/:name/:type', 'http://example.com/users/u4bi/repos');
var exam3 = match('http://example.com/users/:name/:type', 'http://example.com/users/u4bi/orgs');

var exam4 = match('http://example.com/:name?tab=:panel', 'http://example.com/u4bi?tab=stars');
var exam5 = match('http://example.com/:name/?tab=:panel', 'http://example.com/u4bi/?tab=stars');

var exam6 = match(
    'http://example.com/?name=:NAME&level=:LEVEL&weapon=:WEAPON',
    'http://example.com/?name=u4bi&level=17&weapon=ak-47'
);


{
    state: true,
    pattern : 'http://example.com/?name=:NAME&level=:LEVEL&weapon=:WEAPON',
    children:{ 
        NAME   : 'u4bi', 
        LEVEL  : '17', 
        WEAPON : 'ak-47'
    }
}

var exam7 = match('https://:SUB_DOMAIN.github.com', 'https://api.github.com');


  ✔ exam
  ✔ exam2
  ✔ exam3
  ✔ exam4
  ✔ exam5
  ✔ exam6
  ✔ exam7

  7 tests passed
```

## License
[MIT](LICENSE)