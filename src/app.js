import { patternEscape, expression, getKeys, getMatch, isMatch } from './util.js';

var match = (pattern, url) => {
    if (pattern === url) return isMatch(true);
    
    pattern = patternEscape(pattern);

    let keys = getKeys(pattern),
        results = getMatch(url, keys, expression(pattern));

    if(!keys || !results ) return isMatch(false);
    
    return isMatch(true, results.splice(1, keys.length)
                                .reduce((obj, e, index) => {
                                    obj[keys[index]] = e;
                                    return obj;
                                }, {} ));
};

export default match;