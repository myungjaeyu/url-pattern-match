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

test('not_matched_with_longer_path', t => {
    const exam = match('http://example.com/users/:name', 'http://example.com/users/u4bi/repos');

    t.false(exam.state);
})

test('not_matched_with_shorter_path', t => {
    const exam = match('http://example.com/settings/:type', 'http://example.com/settings');

    t.false(exam.state);
})

test('not_matched_with_different_domain', t => {
    const exam = match('http://example.com/settings/:type', 'http://example.org/settings/profile');

    t.false(exam.state);
})

test('not_matched_with_partially_matching_url', t => {
    const exam = match('http://example.com/users/:name/:type', 'http://example.com/users/u4bi');

    t.false(exam.state);
})

/*
  
  ✔ exam
  ✔ exam2
  ✔ exam3
  ✔ exam4
  ✔ exam5
  ✔ exam6
  ✔ exam7
  ✔ exam8
  ✔ not_matched_with_longer_path
  ✔ not_matched_with_shorter_path
  ✔ not_matched_with_different_domain
  ✔ not_matched_with_partially_matching_url

  12 tests passed

*/