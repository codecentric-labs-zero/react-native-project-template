'use strict'
var babel = require('babel-core/register');
function noop() {
    return null;
}
require.extensions['.scss'] = noop;
require.extensions['.css'] = noop;
require.extensions['.png'] = noop;
