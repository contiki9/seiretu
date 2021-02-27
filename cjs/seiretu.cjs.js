'use strict';

const index = require('./index-84c66508.js');

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('seiretu.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["srt-row.cjs",[[4,"srt-row",{"justify":[1],"alignContent":[1,"align-content"],"align":[1],"margin":[1],"nowrap":[4],"column":[4]}]]],["srt-space.cjs",[[1,"srt-space",{"class":[1],"display":[1]}]]]], options);
});
