angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'view/home/home.html'
    })
    .state('reservation', {
      url: '/reservation',
      controller: 'reservationController',
      templateUrl: 'view/reservation/reservation.html'
    })
    .state('weather', {
      url: '/weather',
      controller: 'weatherController',
      templateUrl: 'view/weather/weather.html'
    })
    .state('restaurant', {
      url: '/restaurant',
      controller: 'restaurantsController',
      templateUrl: 'view/restaurant/restaurant.html'
    })
    .state('tour', {
      url: '/tour',
      templateUrl: 'view/tour/tour.html'
    });

  $urlRouterProvider.otherwise('/tour');


})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})