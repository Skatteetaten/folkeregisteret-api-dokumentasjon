const express = require('express');
const livereload = require('metalsmith-livereload');
const watch = require('glob-watcher');

const smith = require('./build');

const build = (clean = false) => (done) => {
    smith(clean, false)
        .use(livereload({
            //debug: true,
            script: '<script src="http://localhost:35729/livereload.js?snipver=1"></script>'
        }))
        .build((err, files) => {
            let filenames = Object.keys(files).join(', ');
            console.log('Built: ' + filenames);
            done(err);
        });
};

const app = express();
app.use('/folkeregisteret-api-dokumentasjon', express.static(__dirname + '/docs'));
app.get('/', (req, res) => res.redirect('/folkeregisteret-api-dokumentasjon'));
app.listen(4567);

console.log('Server started on http://localhost:4567');

watch(['./src/**/*', './layouts/**/*'], { ignoreInitial: false }, build(true));
