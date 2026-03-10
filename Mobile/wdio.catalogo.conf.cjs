const { config } = require('./wdio.conf.cjs');

config.specs = [
    './test/specs/catalogo.spec.js'
];

config.mochaOpts = {
    ...config.mochaOpts,
    timeout: 60000
};

exports.config = config;