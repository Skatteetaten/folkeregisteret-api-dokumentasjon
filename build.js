const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');
const rootPath = require('metalsmith-rootpath');
const collections = require('metalsmith-collections');
const redirect = require('metalsmith-redirect');
const changed = require('metalsmith-changed');
const feed = require('metalsmith-feed');
const dateFormatter = require('metalsmith-date-formatter');
const metadata = require('./metadata');

const smith = (clean = false) => {

    return Metalsmith(__dirname)
        .metadata(metadata)
        .source('src')
        .destination('docs')
        .clean(clean)
        .use(changed())
        .use(dateFormatter({
            dates: [
                {
                    key: 'date',
                    format: 'YYYY-MM-DD'
                },
                {
                    key: 'datetime',
                    format: 'YYYY-MM-DDThh:mm:ss'
                }
            ]
        }))
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
            'test': {
                pattern: 'test/**/*',
                sortBy: 'title'
            },
            'qa': {
                pattern: 'spm-og-svar/**/*',
                sortBy: 'title'
            },
            'driftsstatus-og-nyheter': {
                pattern: '{nyheter/*,driftsstatus/*}',
                sortBy: 'title'
            },
            'nyheter': {
                pattern: 'nyheter/*',
                sortBy: 'date',
                reverse: true
            },
            'driftsstatus': {
                pattern: 'driftsstatus/*',
                sortBy: 'datetime',
                reverse: true
            },
        }))
        .use(markdown({}))
        .use(permalinks({
            pattern: ':title'
        }))
        .use(redirect({
            '/': 'folkeregisteret-api-dokumentasjon/om-tjenestene'
        }))
        .use(feed({
            collection: 'driftsstatus-og-nyheter',
            limit: false
        }))
        .use(layouts({
            default: 'layout.hbs',
            engine: 'handlebars',
            partials: 'partials',
            partialExtension: ".hbs",
            pattern: '**/*.html'

        }))
        ;
};

smith(true)
    .build(function (err) {
        if (err) throw err;
    });

module.exports = smith;
