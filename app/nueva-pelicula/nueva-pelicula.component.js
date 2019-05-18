angular
  .module('nuevaPeliculaModule')
  .component('nuevaPelicula',{
    templateUrl:'nueva-pelicula/nueva-pelicula.template.html',
    controller: function NuevaPeliculaController(cssInjector){
      cssInjector.add('nueva-pelicula/nueva-pelicula.styles.css');
      this.titulo = "Agregar Pelíula";
    }
  })