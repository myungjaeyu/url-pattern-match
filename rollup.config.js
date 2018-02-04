import uglify from 'rollup-plugin-uglify-es';

export default [
    { 
        input       : './src/app.js',
        output      : {
            file : 'dist/url-pattern-match.min.js',
            format      : 'umd',
            name  : 'match'
        },
        plugins     : [ uglify() ]
    },
    { 
        input       : './src/app.js',
        output      : {
            file : 'dist/url-pattern-match.js',
            format      : 'umd',
            name  : 'match'
        }
        // , sourceMap   : 'inline'
    }
];