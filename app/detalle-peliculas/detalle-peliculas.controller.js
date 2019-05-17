//detallePeliculasModule
angular
  .module('detallePeliculasModule')
  .component('detallePelicula', {
    templateUrl:'detalle-peliculas/detalle-peliculas.template.html',
    controller: function DetallePeliculasController(cssInjector,PeliculasService,$log){
      cssInjector.add('detalle-peliculas/detalle-peliculas.styles.css');
      this.titulo = "Modificar Pelicula";
    }
  })