const str = require('./another.js');
console.log(str)

const minify = require('minify');
const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
    },
};
minify('./another.js', options)
    .then(console.log)
    .catch(console.error);