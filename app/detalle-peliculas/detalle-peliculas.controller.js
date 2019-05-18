//detallePeliculasModule
angular
  .module('detallePeliculasModule')
  .component('detallePelicula', {
    templateUrl:'detalle-peliculas/detalle-peliculas.template.html',
    controller: function DetallePeliculasController(cssInjector,PeliculasService,$log,$routeParams,$location){
      this.idPelicula = $routeParams.id;
      cssInjector.add('detalle-peliculas/detalle-peliculas.styles.css');
      this.titulo = "Modificar Pelicula";
      let me = this;
      onInit();

      function onInit(){
        getPeliculaXID();
        obtenerGeneros();
      }
      function getPeliculaXID() {
        me.success = false;
        me.error = false;
        PeliculasService.obtenerPeliculaXID(me.idPelicula)
          .then(response => {
            me.detalle = true;
            me.peliculaSelect = response;
            me.generoSelected = response.id_genero;
            console.log(me.peliculaSelect);
          })
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

      me.modificarPelicula = function modificarPelicula(){
        PeliculasService.modificarPelicula(me.peliculaSelect)
          .then(response => {
            if(response > 0){
              /*me.success = true;
              me.error = false;
              obtenerPeliculas();
              me.mensaje = "La pelicula fue modificada correctamente";*/
              $location.path('peliculas')
            }
          }).catch(function(error){
            me.success = false;
            me.error = true;
            me.mensaje = "Por favor intente mas tarde";
          });
          me.detalle = false;
      }
    }
  })