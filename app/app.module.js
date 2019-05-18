angular
  .module('peliculasApp',['angular.css.injector','listadoPeliculasModule','ngRoute','detallePeliculasModule','navbarModule','nuevaPeliculaModule'])
  .config(function(cssInjectorProvider){
    cssInjectorProvider.setSinglePageMode(true);
  })