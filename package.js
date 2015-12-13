Package.describe({
  name: 'zenflux:actions',
  version: '0.0.5',
  summary: 'Zen Action creators and Mixins',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'check',
    'underscore'
  ]);

  // Client
  api.addFiles(['src/client/actions.js'], 'client');

  api.export([
    'ZenAction',
    'ZenMixins'
  ]);
});

Package.onTest(function (api) {
  api.use('sanjo:jasmine@0.20.3');
  api.use('ecmascript');
  api.use([
    'underscore',
    'check'
  ]);
  api.use('zenflux:actions');
  api.addFiles('src/tests/client/unit/actionCreatorSpec.js');
  api.addFiles('src/tests/client/unit/actionMixinsSpec.js');
});
