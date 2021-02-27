'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84c66508.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["srt-row.cjs",[[4,"srt-row",{"justify":[1],"alignContent":[1,"align-content"],"align":[1],"margin":[1],"nowrap":[4],"column":[4]}]]],["srt-space.cjs",[[1,"srt-space",{"class":[1],"display":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
