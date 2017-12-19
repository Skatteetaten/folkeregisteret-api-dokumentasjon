const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');
const rootPath = require('metalsmith-rootpath');
const collections = require('metalsmith-collections');
const redirect = require('metalsmith-redirect');
const changed = require('metalsmith-changed');
const feed = require('metalsmith-feed');
const metadata = require('./metadata');

const smith = (clean = false) => {

    return Metalsmith(__dirname)
        .metadata(metadata)
        .source('src')
        .destination('docs')
        .clean(clean)
        .use(changed())
        .use(rootPath())
        .use(collections({
            'om-tjenestene': {
                pattern: 'om-tjenestene/**/*',
                sortBy: 'title'
            },
            'produsenttjenester': {
                pattern: 'produsenttjenester/**/*',
                sortBy: 'title'
            },
            'konsumenttjenester': {
                pattern: 'konsumenttjenester/**/*',
                sortBy: 'title'
            },
          'driftsstatus-og-nyheter': {
            pattern: 'driftsstatus-og-nyheter/**/*',
            sortBy: 'title'
          }
        }))
        .use(markdown({}))
        .use(permalinks({
            pattern: ':title'
        }))
        .use(redirect({
        '/': '/om-tjenestene'
        }))
        .use(feed({
          collection: 'driftsstatus-og-nyheter',
        }))
        .use(layouts({
            default: 'layout.hbs',
            engine: 'handlebars',
            pattern: '**/*.html'
        }))
      ;
};

smith(true)
    .build(function(err) {
        if (err) throw err;
    });

module.exports = smith;