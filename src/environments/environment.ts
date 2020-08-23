// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useMocks: true,
  appConfiguration: {
    app_title: 'Rhombus App',
    app_logo: '',
    requireAuth: false,
  },
  firebaseConfig: {
    apiKey: 'AIzaSyA9y1qnIbgnlbAy6HOSLg4eW7gS8lsqlOQ',
    authDomain: 'journal-tbd.firebaseapp.com',
    databaseURL: 'https://journal-tbd.firebaseio.com',
    projectId: 'journal-tbd',
    storageBucket: 'journal-tbd.appspot.com',
    messagingSenderId: '280018341944',
    appId: '1:280018341944:web:d29405dc2bd5e87539d6cd'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
