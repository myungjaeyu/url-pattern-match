import uglify from 'rollup-plugin-uglify-es';

export default { 
    entry       : './src/app.js',
    dest        : 'dist/url-pattern-match.min.js',
    format      : 'umd',
    moduleName  : 'match',
    // sourceMap   : 'inline',
    plugins     : [ uglify() ]
};