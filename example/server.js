const match = require('../dist/url-pattern-match.min');

console.log(match('https://github.com/:name', 'https://github.com/u4bi'));

console.log(match('https://github.com/:name/:repository', 'https://github.com/u4bi/url-pattern-match'));

console.log(match('https://github.com/:name/?tab=:TAB_TYPE', 'https://github.com/u4bi/?tab=repositories'));
console.log(match('https://github.com/:name/?tab=:TAB_TYPE', 'https://github.com/u4bi/?tab=stars'));
console.log(match('https://github.com/:name/?tab=:TAB_TYPE', 'https://github.com/u4bi/?tab=followers'));
console.log(match('https://github.com/:name?tab=:TAB_TYPE', 'https://github.com/u4bi?tab=following'));

console.log(match('/board/list?id=:BOARD_ID&page=:PAGE_ID', '/board/list?id=programming&page=7'));
console.log(match('/users/?name=:USER_NAME&level=:USER_LEVEL&weapon=:USER_WEAPON', '/users/?name=u4bi&level=17&weapon=ak-47'));

console.log(match('https://:SUB_DOMAIN.github.com', 'https://api.github.com'));