// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-UBd0s66Tyv5wRb72R1fHyCermGcCWyk",
    authDomain: "projeto-vinicius-79bf0.firebaseapp.com",
    projectId: "projeto-vinicius-79bf0",
    storageBucket: "projeto-vinicius-79bf0.appspot.com",
    messagingSenderId: "818479224059",
    appId: "1:818479224059:web:aaeba3f775e40fe3308c5e"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
