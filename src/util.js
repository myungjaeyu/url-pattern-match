export var patternEscape = (pattern) => pattern.replace(/[\?\&\.]/g, '\\$&');
export var expression = (pattern) => new RegExp(`^${ pattern.replace(/\:[^\/\&\.\?]+/g, '([^\/]+)').replace(/\)\?/, ')\\?') }$`);

export var getKeys = (pattern) => {
    try {
        return pattern.match(/\:([^\?\/\\]+)/g).map(e => e.slice(1));
    } catch(e) {
        return null;
    };
};

export var getMatch = (url, keys, regex) => url.match(regex);

export var isMatch = (state, pattern, children = {} ) => {
    return { state : state, pattern : pattern, children : children };
};