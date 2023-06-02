const { transformFileSync } = require('@babel/core');
const path = require('path');
const plugin = require('./plugin.js');

const { code } = transformFileSync(path.join(__dirname, './sourceCode.js'), {
  plugins: [plugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx'],
  },
});

console.log(code);