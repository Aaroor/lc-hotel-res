// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase : {
    apiKey: "AIzaSyDJc9c2t96UkhtEI_fKdJxvZw7GVbxWVC8",
    authDomain: "lc-hotel-res.firebaseapp.com",
    databaseURL: "https://lc-hotel-res.firebaseio.com",
    projectId: "lc-hotel-res",
    storageBucket: "lc-hotel-res.appspot.com",
    messagingSenderId: "37251003508"
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
