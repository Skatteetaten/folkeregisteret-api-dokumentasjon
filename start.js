const nodeStatic = require('node-static');
const livereload = require('metalsmith-livereload');
const watch = require('glob-watcher');

const smith = require('./build');

const build = (clean = false) => (done) => {
    smith(clean, true)
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

const serve = new nodeStatic.Server(__dirname + '/docs');
require('http').createServer((req, res) => {
    req.addListener('end', () => serve.serve(req, res));
    req.resume();
}).listen(4567);

console.log('Server started on http://localhost:4567');

watch(['./src/**/*', './layouts/**/*'], { ignoreInitial: false }, build(true));