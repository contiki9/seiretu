import { p as promiseResolve, b as bootstrapLazy } from './index-d332063f.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["srt-row",[[4,"srt-row",{"justify":[1],"alignContent":[1,"align-content"],"align":[1],"margin":[1],"nowrap":[4],"column":[4]}]]],["srt-space",[[1,"srt-space",{"class":[1],"display":[1]}]]]], options);
});
