/* jshint globalstrict:true */
/* global require */

'use strict';

require.config({
    baseUrl: '../scripts/',
    deps: ['runner'],
    paths: {
        appConfig: '../scripts/config',
        runner: '../tests/runner',
        spec: '../tests/spec'
    },
    shim: {
        runner: ['appConfig']
    }
});
