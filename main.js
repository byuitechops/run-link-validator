/*eslint-env node, es6*/

/* run the canvas link validator tool. This child module must run at the end */

const canvas = require('canvas-wrapper');


module.exports = (course, stepCallback) => {
    canvas.post(`/api/v1/courses/${course.info.canvasOU}/link_validation`, {}, err => {
        if (err) {
            course.error(err);
            stepCallback(null, course);
            return;
        }
        
        course.log('Link Validator Started', {started: 'true'});
        stepCallback(null, course);
    });
};