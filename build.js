const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');

const metadata = require('./metadata');

const smith = (clean = true) => {

    return Metalsmith(__dirname)
        .metadata(metadata)
        .source('src')
        .destination('dest')
        .clean(clean)
        .use(collections({
            'om_tjenestene': {
                pattern: 'om_tjenestene/**/*',
                sortBy: 'title'
            },
            'produsenttjenester': {
                pattern: 'produsenttjenester/**/*',
                sortBy: 'title'
            },
            'konsumenttjenester': {
                pattern: 'konsumenttjenester/**/*',
                sortBy: 'title'
            }
        }))
        .use(markdown({}))
        .use(permalinks({
            pattern: ':title'
        }))
        .use(layouts({
            default: 'layout.hbs',
            engine: 'handlebars',
            pattern: '**/*.html'
        }));
};

smith(true)
    .build(function(err) {
        if (err) throw err;
    });

module.exports = smith;