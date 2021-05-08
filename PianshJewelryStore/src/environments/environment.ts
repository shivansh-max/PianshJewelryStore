// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  main : 'http://192.168.0.6:8080/piansh',
  getall : 'http://192.168.0.6:8080/piansh/getall',
  sortgetOne : 'http://192.168.0.6:8080/piansh/getOne',
  search : 'http://192.168.0.6:8080/search',
  pagination : 'http://192.168.0.6:8080/piansh/pagination',
  sort : 'http://192.168.0.6:8080/piansh/sort',
  paginationSort : 'http://192.168.0.6:8080/paginationSort',
  deleteAll : 'http://192.168.0.6:8080/deleteAll',
  deleteOne : 'http://192.168.0.6:8080/piansh/deleteOne',
  edit : 'http://192.168.0.6:8080/piansh/edit',
  add : 'http://192.168.0.6:8080/add',


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
