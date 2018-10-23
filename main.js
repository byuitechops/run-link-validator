/*eslint-env node, es6*/

/* run the canvas link validator tool. This child module must run at the end */

const canvas = require('canvas-wrapper');


module.exports = (course, stepCallback) => {

    stepCallback(null, course);
};
