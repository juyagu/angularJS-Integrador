angular
  .module('peliculasApp',['angular.css.injector','listadoPeliculasModule','ngRoute'])
  .config(function(cssInjectorProvider){
    cssInjectorProvider.setSinglePageMode(true);
  })