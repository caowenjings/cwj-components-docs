// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {
    '404': { id: '404', path: '*', parentId: 'DocLayout' },
    'dumi-context-layout': { id: 'dumi-context-layout', path: '/', isLayout: true },
    DocLayout: { id: 'DocLayout', path: '/', parentId: 'dumi-context-layout', isLayout: true },
    'docs/jsTools/string-formatFileSize': {
      path: 'js-tools/string-format-file-size',
      id: 'docs/jsTools/string-formatFileSize',
      parentId: 'DocLayout',
    },
    'docs/jsTools/string-parseUrlParams': {
      path: 'js-tools/string-parse-url-params',
      id: 'docs/jsTools/string-parseUrlParams',
      parentId: 'DocLayout',
    },
    'docs/jsTools/string-thousandFormat': {
      path: 'js-tools/string-thousand-format',
      id: 'docs/jsTools/string-thousandFormat',
      parentId: 'DocLayout',
    },
    'docs/jsTools/array-deepSearchAll': {
      path: 'js-tools/array-deep-search-all',
      id: 'docs/jsTools/array-deepSearchAll',
      parentId: 'DocLayout',
    },
    'docs/jsTools/object-obj2FormData': {
      path: 'js-tools/object-obj2-form-data',
      id: 'docs/jsTools/object-obj2FormData',
      parentId: 'DocLayout',
    },
    'docs/directives/defineDirective': {
      path: 'directives/define-directive',
      id: 'docs/directives/defineDirective',
      parentId: 'DocLayout',
    },
    'docs/jsTools/cache-sessionCache': {
      path: 'js-tools/cache-session-cache',
      id: 'docs/jsTools/cache-sessionCache',
      parentId: 'DocLayout',
    },
    'docs/jsTools/event-eventEmitter': {
      path: 'js-tools/event-event-emitter',
      id: 'docs/jsTools/event-eventEmitter',
      parentId: 'DocLayout',
    },
    'docs/jsTools/string-randomColor': {
      path: 'js-tools/string-random-color',
      id: 'docs/jsTools/string-randomColor',
      parentId: 'DocLayout',
    },
    'docs/jsTools/window-fullScreen': {
      path: 'js-tools/window-full-screen',
      id: 'docs/jsTools/window-fullScreen',
      parentId: 'DocLayout',
    },
    'docs/components/themeProvider': {
      path: 'components/theme-provider',
      id: 'docs/components/themeProvider',
      parentId: 'DocLayout',
    },
    'docs/jsTools/array-deepSearch': {
      path: 'js-tools/array-deep-search',
      id: 'docs/jsTools/array-deepSearch',
      parentId: 'DocLayout',
    },
    'docs/jsTools/cache-localCache': {
      path: 'js-tools/cache-local-cache',
      id: 'docs/jsTools/cache-localCache',
      parentId: 'DocLayout',
    },
    'docs/jsTools/base-isDataType': {
      path: 'js-tools/base-is-data-type',
      id: 'docs/jsTools/base-isDataType',
      parentId: 'DocLayout',
    },
    'docs/jsTools/window-copyText': {
      path: 'js-tools/window-copy-text',
      id: 'docs/jsTools/window-copyText',
      parentId: 'DocLayout',
    },
    'docs/directives/rPermission': {
      path: 'directives/r-permission',
      id: 'docs/directives/rPermission',
      parentId: 'DocLayout',
    },
    'docs/jsTools/file-download': {
      path: 'js-tools/file-download',
      id: 'docs/jsTools/file-download',
      parentId: 'DocLayout',
    },
    'docs/jsTools/file-html2Pdf': {
      path: 'js-tools/file-html2-pdf',
      id: 'docs/jsTools/file-html2Pdf',
      parentId: 'DocLayout',
    },
    'docs/jsTools/window-scroll': {
      path: 'js-tools/window-scroll',
      id: 'docs/jsTools/window-scroll',
      parentId: 'DocLayout',
    },
    'docs/jsTools/array-uniqBy': {
      path: 'js-tools/array-uniq-by',
      id: 'docs/jsTools/array-uniqBy',
      parentId: 'DocLayout',
    },
    'docs/jsTools/event-sleep': {
      path: 'js-tools/event-sleep',
      id: 'docs/jsTools/event-sleep',
      parentId: 'DocLayout',
    },
    'docs/jsTools/object-omit': {
      path: 'js-tools/object-omit',
      id: 'docs/jsTools/object-omit',
      parentId: 'DocLayout',
    },
    'docs/jsTools/object-pick': {
      path: 'js-tools/object-pick',
      id: 'docs/jsTools/object-pick',
      parentId: 'DocLayout',
    },
    'docs/jsTools/string-uuid': {
      path: 'js-tools/string-uuid',
      id: 'docs/jsTools/string-uuid',
      parentId: 'DocLayout',
    },
    'docs/jsTools/base-clone': {
      path: 'js-tools/base-clone',
      id: 'docs/jsTools/base-clone',
      parentId: 'DocLayout',
    },
    'docs/jsTools/string-tm': {
      path: 'js-tools/string-tm',
      id: 'docs/jsTools/string-tm',
      parentId: 'DocLayout',
    },
    'docs/jsTools/validates': {
      path: 'js-tools/validates',
      id: 'docs/jsTools/validates',
      parentId: 'DocLayout',
    },
    'docs/components/index': {
      path: 'components',
      id: 'docs/components/index',
      parentId: 'DocLayout',
    },
    'docs/directives/index': {
      path: 'directives',
      id: 'docs/directives/index',
      parentId: 'DocLayout',
    },
    'docs/devTools/index': { path: 'dev-tools', id: 'docs/devTools/index', parentId: 'DocLayout' },
    'docs/directives/rIf': {
      path: 'directives/r-if',
      id: 'docs/directives/rIf',
      parentId: 'DocLayout',
    },
    'docs/jsTools/index': { path: 'js-tools', id: 'docs/jsTools/index', parentId: 'DocLayout' },
    'docs/guide/index': { path: 'guide', id: 'docs/guide/index', parentId: 'DocLayout' },
    'docs/index': { path: '', id: 'docs/index', parentId: 'DocLayout' },
    'components/empty/index': {
      id: 'components/empty/index',
      path: 'components/empty',
      parentId: 'DocLayout',
      meta: { _atom_route: true },
    },
    'demo-render': { id: 'demo-render', path: '~demos/:id', parentId: 'dumi-context-layout' },
  } as const;
  return {
    routes,
    routeComponents: {
      '404': React.lazy(
        () =>
          import(
            /* webpackChunkName: "nm__dumi__dist__client__pages__404" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/node_modules/dumi/dist/client/pages/404.js'
          ),
      ),
      'dumi-context-layout': React.lazy(
        () =>
          import(
            /* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/.dumi/tmp/dumi/theme/ContextWrapper'
          ),
      ),
      DocLayout: React.lazy(
        () =>
          import(
            /* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/node_modules/dumi/theme-default/layouts/DocLayout/index.js'
          ),
      ),
      'docs/jsTools/string-formatFileSize': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__string-formatFileSize.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/string-formatFileSize.md'
          ),
      ),
      'docs/jsTools/string-parseUrlParams': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__string-parseUrlParams.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/string-parseUrlParams.md'
          ),
      ),
      'docs/jsTools/string-thousandFormat': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__string-thousandFormat.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/string-thousandFormat.md'
          ),
      ),
      'docs/jsTools/array-deepSearchAll': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__array-deepSearchAll.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/array-deepSearchAll.md'
          ),
      ),
      'docs/jsTools/object-obj2FormData': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__object-obj2FormData.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/object-obj2FormData.md'
          ),
      ),
      'docs/directives/defineDirective': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__directives__defineDirective.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/directives/defineDirective.md'
          ),
      ),
      'docs/jsTools/cache-sessionCache': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__cache-sessionCache.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/cache-sessionCache.md'
          ),
      ),
      'docs/jsTools/event-eventEmitter': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__event-eventEmitter.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/event-eventEmitter.md'
          ),
      ),
      'docs/jsTools/string-randomColor': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__string-randomColor.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/string-randomColor.md'
          ),
      ),
      'docs/jsTools/window-fullScreen': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__window-fullScreen.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/window-fullScreen.md'
          ),
      ),
      'docs/components/themeProvider': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__components__themeProvider.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/components/themeProvider.md'
          ),
      ),
      'docs/jsTools/array-deepSearch': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__array-deepSearch.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/array-deepSearch.md'
          ),
      ),
      'docs/jsTools/cache-localCache': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__cache-localCache.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/cache-localCache.md'
          ),
      ),
      'docs/jsTools/base-isDataType': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__base-isDataType.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/base-isDataType.md'
          ),
      ),
      'docs/jsTools/window-copyText': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__window-copyText.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/window-copyText.md'
          ),
      ),
      'docs/directives/rPermission': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__directives__rPermission.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/directives/rPermission.md'
          ),
      ),
      'docs/jsTools/file-download': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__file-download.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/file-download.md'
          ),
      ),
      'docs/jsTools/file-html2Pdf': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__file-html2Pdf.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/file-html2Pdf.md'
          ),
      ),
      'docs/jsTools/window-scroll': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__window-scroll.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/window-scroll.md'
          ),
      ),
      'docs/jsTools/array-uniqBy': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__array-uniqBy.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/array-uniqBy.md'
          ),
      ),
      'docs/jsTools/event-sleep': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__event-sleep.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/event-sleep.md'
          ),
      ),
      'docs/jsTools/object-omit': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__object-omit.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/object-omit.md'
          ),
      ),
      'docs/jsTools/object-pick': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__object-pick.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/object-pick.md'
          ),
      ),
      'docs/jsTools/string-uuid': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__string-uuid.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/string-uuid.md'
          ),
      ),
      'docs/jsTools/base-clone': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__base-clone.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/base-clone.md'
          ),
      ),
      'docs/jsTools/string-tm': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__string-tm.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/string-tm.md'
          ),
      ),
      'docs/jsTools/validates': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__validates.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/validates.md'
          ),
      ),
      'docs/components/index': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__components__index.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/components/index.md'
          ),
      ),
      'docs/directives/index': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__directives__index.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/directives/index.md'
          ),
      ),
      'docs/devTools/index': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__devTools__index.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/devTools/index.md'
          ),
      ),
      'docs/directives/rIf': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__directives__rIf.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/directives/rIf.md'
          ),
      ),
      'docs/jsTools/index': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__jsTools__index.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/jsTools/index.md'
          ),
      ),
      'docs/guide/index': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__guide__index.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/guide/index.md'
          ),
      ),
      'docs/index': React.lazy(
        () =>
          import(
            /* webpackChunkName: "docs__index.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/docs/index.md'
          ),
      ),
      'components/empty/index': React.lazy(
        () =>
          import(
            /* webpackChunkName: "empty__index.md" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/src/empty/index.md'
          ),
      ),
      'demo-render': React.lazy(
        () =>
          import(
            /* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */ '/Users/caowenjing/Documents/React练习/组件库/cwj-components-docs/node_modules/dumi/dist/client/pages/Demo/index.js'
          ),
      ),
    },
  };
}
