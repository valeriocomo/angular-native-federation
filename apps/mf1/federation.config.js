const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf1',

  exposes: {
    './Component': './apps/mf1/src/app/app.component.ts',
    './Routes': './apps/mf1/src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
    // '@nestjs/common',
    // '@nestjs/core',
    // '@nestjs/platform-express',
    (pkg) => pkg.startsWith('@nestjs/'),
    "@nx/nest"
  ]
  
});
