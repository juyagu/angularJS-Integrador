angular
  .module('listadoPeliculasModule')
  .component('listadoPeliculas', {
    templateUrl: 'listado-peliculas/listado-peliculas.template.html',
    controller: function ListadoPeliculasController(cssInjector, $q, PeliculasService, $log,$location) {
      cssInjector.add('listado-peliculas/listado-peliculas.styles.css');
      this.titulo = "Listado de peliculas";
      let me = this;
      me.detalle = false;
      me.success = false;
      me.error = false;
      me.generos = [];
      me.generoSelected = 0;
      onInit();
      function onInit() {
        obtenerPeliculas();
        obtenerGeneros();
      }

      function obtenerPeliculas(){
        PeliculasService.obtenerPeliculas()
          .then(response => {
            console.log(response);
            me.peliculas = response;
          });
      }

      me.getPeliculaXID = function getPeliculaXID(idPelicula) {
        /*me.success = false;
        me.error = false;
        PeliculasService.obtenerPeliculaXID(idPelicula)
          .then(response => {
            me.detalle = true;
            me.peliculaSelect = response;
            me.generoSelected = response.id_genero;
            console.log(me.peliculaSelect);
          })*/
          $location.path("pelicula/"+idPelicula);
      }

      me.modificarPelicula = function modificarPelicula(){
        PeliculasService.modificarPelicula(me.peliculaSelect)
          .then(response => {
            if(response > 0){
              me.success = true;
              me.error = false;
              obtenerPeliculas();
              me.mensaje = "La pelicula fue modificada correctamente";
            }
          }).catch(function(error){
            me.success = false;
            me.error = true;
            me.mensaje = "Por favor intente mas tarde";
          });
          me.detalle = false;
      }

      function obtenerGeneros(){
        PeliculasService.obtenerGeneros()
          .then(response => {
            me.generos = response;
            $log.info(me.generos);
          }).catch(function(error){
            manejoError(error);
          })
      }

      function manejoError(error){
        $log.error(error);
      }
    }
  })