import { patternEscape, expression, getKeys, getMatch, isMatch } from './util.js';

var match = (pattern, url) => {
    if (pattern === url) return isMatch(true, pattern);
    
    let _pattern = patternEscape(pattern);

    let keys = getKeys(_pattern),
        results = getMatch(url, keys, expression(_pattern));

    if(!keys || !results ) return isMatch(false);
    
    return isMatch(true, pattern, results.splice(1, keys.length)
                                .reduce((obj, e, index) => {
                                    obj[keys[index]] = e;
                                    return obj;
                                }, {} ));
};

export default match;