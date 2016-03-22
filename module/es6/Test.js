var System = require('systemjs');
var resolve = require('resolve');
var path = require('path');

var folderPath = path.relative(process.cwd(), path.dirname(resolve.sync('systemjs-plugin-babel', { basedir: process.cwd() })));
var pluginPath = path.relative(process.cwd(), resolve.sync('babel-plugin-transform-es2015-modules-commonjs', { basedir: process.cwd() }));

System.config({
    map: {
        'systemjs-plugin-babel': folderPath + '/plugin-babel.js'
        , 'systemjs-babel-build': folderPath + '/systemjs-babel-node.js',
        'babel-plugin-transform-es2015-modules-commonjs': pluginPath
    },
     transpiler: 'systemjs-plugin-babel',
  babelOptions: {
    sourceMaps:'inline',
    presets:[],
    plugins: ['babel-plugin-transform-es2015-modules-commonjs']
  }
});

var prom=System.import('./src/test/test.js')

prom.catch(function (err) {
                    console.log(err.message);
                    console.log(err.stack);
                    throw err
                });

