angular
  .module('peliculasApp')
  .config(['$routeProvider',
    function config($routeProvider){
      $routeProvider
        .when('/peliculas',{
          template: '<listado-peliculas></listado-peliculas>'
        })
        .when('/pelicula/:id',{
          template:'<detalle-pelicula></detalle-pelicula>'
        })
        .when('/nueva',{
          template:'<nueva-pelicula></nueva-pelicula>'
        })
        .otherwise('/peliculas');
    }
  ]);