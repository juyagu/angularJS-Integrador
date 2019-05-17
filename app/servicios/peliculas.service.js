angular
  .module('peliculasApp')
  .factory('PeliculasService', function ($http, $log) {
    return {
      obtenerPeliculas: function () {
        var promesa = $http.get('http://localhost:3001/angular5/peliculas').then(response => {
          return response.data;
        });
        return promesa;
      },
      obtenerPeliculaXID: function (id) {
        var promesa = $http.get(`http://localhost:3001/angular5/peliculas/${id}`).then(response => {
          return response.data;
        });
        return promesa;
      },
      modificarPelicula: function (pelicula) {
        var promesa = $http.put(`http://localhost:3001/angular5/peliculas/${pelicula.id}`, pelicula).then(response => {
          return response.data.affectedRows;
        }).catch(function(ex){
          throw ex;
        })
        return promesa;
      },
      obtenerGeneros: function(){
        var promesa = $http.get(`http://localhost:3001/angular5/generos`)
          .then(response => {
            return response.data;
          }).catch(function(ex){
            throw ex;
          });
          return promesa;
      }
    }
  })