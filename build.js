const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('@metalsmith/permalinks');
const rootPath = require('metalsmith-rootpath');
const collections = require('metalsmith-collections');
const redirect = require('metalsmith-redirect');
const changed = require('metalsmith-changed');
const feed = require('metalsmith-feed');
const dateFormatter = require('metalsmith-date-formatter');
const defaultValues = require('@metalsmith/default-values');
const validate = require('metalsmith-validate');
const slugify = require('slugify');
const metadata = require('./metadata');

const PLACEHOLDERS = { colon: '~c~', quote: '~q~' };
const restore = text => text.split(PLACEHOLDERS.colon).join(':').split(PLACEHOLDERS.quote).join('"');

// Den gamle pakken satte `path` til sidens endelige adresse. Layoutene bruker `path` i lenker.
const restoreLegacyPermalinks = files => {
    Object.keys(files).forEach(file => {
        const data = files[file];
        if (typeof data.permalink !== 'string') return;
        data.permalink = restore(data.permalink);
        data.path = data.permalink;
        // Toppsidene fant css/ via kopier som den gamle pakken laget. Nå peker de til riktig mappe.
        if (data.rootPath === '' && data.permalink) data.rootPath = '../';
        const restored = restore(file);
        if (restored !== file) {
            files[restored] = data;
            delete files[file];
        }
    });
};

// Validator-siden henter skriptet fra sin egen mappe, så filene må kopieres dit.
const keepValidatorAssets = files => {
    ['js', 'java'].forEach(ext => {
        const from = `dokumenter/foedselsEllerDNummerValidator.${ext}`;
        if (files[from]) files[`dokumenter/foedselsEllerDNummerValidator/foedselsEllerDNummerValidator.${ext}`] = files[from];
    });
};

const smith = (clean = false) => {

    return Metalsmith(__dirname)
        .metadata(metadata)
        .source('src')
        .destination('docs')
        .clean(clean)
        .use(changed())
        .use(defaultValues([
            {
                pattern: '{nyheter/*,driftsstatus/*}',
                defaults: {
                    datetime: function (post) {
                        return post.date;
                    },
                    formattedDate: function (post) {
                        return post.date;
                    }
                }
            },
            {
                pattern: 'dokumenter/foedselsEllerDNummerValidator.html',
                defaults: {
                    permalink: 'dokumenter/foedselsEllerDNummerValidator'
                }
            }
        ]))
        .use(validate([
            {
                pattern: '{nyheter/*,driftsstatus/*}',
                metadata: {
                    title: true,
                    date: {
                        exists: true,
                        type: 'Date'
                    }
                }
            }
        ]))
        .use(dateFormatter({
            dates: [
                {
                    key: 'formattedDate',
                    format: 'YYYY-MM-DD'
                },
                {
                    key: 'datetime',
                    format: 'YYYY-MM-DDTHH:mm:ss'
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
            'pakobling-til-freg': {
                pattern: 'pakobling-til-freg/**/*',
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
                sortBy: 'date',
                reverse: true
            },
            'nyheter': {
                pattern: 'nyheter/*',
                sortBy: 'date',
                reverse: true,
                limit: 10
            },
            'allenyheter': {
                pattern: 'nyheter/*',
                sortBy: 'date',
                reverse: true
            },
            'driftsstatus': {
                pattern: 'driftsstatus/*',
                sortBy: 'datetime',
                reverse: true,
                limit: 10
            }
        }))
        .use(markdown({}))
        .use(permalinks({
            pattern: ':title',
            // Den gamle pakken lot siste fil vinne når to sider fikk samme adresse. Det skjer i dag, så vi beholder det.
            duplicates: 'overwrite',
            // Lager adressene på samme måte som før, slik at eksisterende URL-er ikke endres.
            // Den nye pakken nekter ':' og '"' i adresser, så de byttes midlertidig ut
            // og settes tilbake av restoreLegacyPermalinks.
            slug: text => slugify(text, {
                lower: true,
                remove: /[^\w\s$*_+~.()'"!\-:@]+/g
            }).replace(/:/g, PLACEHOLDERS.colon).replace(/"/g, PLACEHOLDERS.quote)
        }))
        .use(restoreLegacyPermalinks)
        .use(keepValidatorAssets)
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
