angular
  .module('navbarModule')
  .component('navbar',{
    templateUrl:'navbar/navbar.template.html',
    controller: function NavbarController(cssInjector){
      cssInjector.add('navbar/navbar.styles.css');
    }
  })