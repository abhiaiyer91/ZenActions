Package.describe({
  name: 'zen:actions',
  version: '0.0.1',
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
  api.addFiles('actions.js');
});

Package.onTest(function (api) {
  api.use('sanjo:jasmine');
  api.use('ecmascript');
  api.use([
    'underscore',
    'check',
    'workpop:logger'
  ]);
  api.use('zen:actions');
  api.addFiles('src/tests/client/unit/actionCreatorSpec.js');
  api.addFiles('src/tests/client/unit/actionMixinsSpec.js');
});
