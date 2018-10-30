const test = require('ava');
const match = require('../dist/url-pattern-match.min');

test('exam', t => {
    const exam = match('/settings/:type', '/settings/profile');

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 1);
    t.is(exam.children.type, 'profile');
});

test('exam2', t => {
    const exam = match('/settings/:type', '/settings/admin');

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 1);
    t.is(exam.children.type, 'admin');
});

test('exam3', t => {
    const exam = match('/users/:name/:type', '/users/u4bi/repos');

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 2);
    t.is(exam.children.name, 'u4bi');
    t.is(exam.children.type, 'repos');
});

test('exam4', t => {
    const exam = match('/users/:name/:type', '/users/u4bi/orgs');

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 2);
    t.is(exam.children.name, 'u4bi');
    t.is(exam.children.type, 'orgs');
});

test('exam5', t => {
    const exam = match('/:name?tab=:panel', '/u4bi?tab=stars');

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 2);
    t.is(exam.children.name, 'u4bi');
    t.is(exam.children.panel, 'stars');
});

test('exam6', t => {
    const exam = match('/:name/?tab=:panel', '/u4bi/?tab=stars');

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 2);
    t.is(exam.children.name, 'u4bi');
    t.is(exam.children.panel, 'stars');
});

test('exam7', t => {
    const exam = match('/?name=:NAME&level=:LEVEL&weapon=:WEAPON', '/?name=u4bi&level=17&weapon=ak-47');
    
    console.log(exam);

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 3);
    t.is(exam.children.NAME, 'u4bi');
    t.is(exam.children.LEVEL, '17');
    t.is(exam.children.WEAPON, 'ak-47');
});

test('exam8', t => {
    const exam = match('https://:SUB_DOMAIN.github.com', 'https://api.github.com');

    t.true(exam.state);
    t.is(Object.keys(exam.children).length, 1);
    t.is(exam.children.SUB_DOMAIN, 'api');
});

/*
  
  ✔ exam
  ✔ exam2
  ✔ exam3
  ✔ exam4
  ✔ exam5
  ✔ exam6
  ✔ exam7
  ✔ exam8

  8 tests passed

*/