var myApp = angular.module('myApp', ['ngRoute'])

myApp.config( ['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/filmsearch', {
            templateUrl: 'templates/film_search.html',
            controller: 'filmsearchController'
        })
        .when('/mapsearch', {
            templateUrl: 'templates/map_search.html',
            controller: 'mapsearchController'
        })
        .when('/details', {
            templateUrl: 'templates/details.html',
            controller: 'detailController'
        })
        .when('/favourites', {
            templateUrl: 'templates/favourites.html',
            controller: 'favouritesController'
        })
        //This will be something that I have to code myself...
        //This will be a page, showing your previous search history.
        .when('/recent', {
            templateUrl: 'templates/recent.html',
            controller: 'recentController'
        })
        //This will just contain a few links to move to the other pages
        //I have two searches, so there is no point pointing the user to one of them.
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
    
}])
//$http meaning, it sends a http request to my api, to get the third-party data
myApp.controller('filmsearchController', function($scope, $http){
    
    var searchFilm = $scope.searchTerm
    var url = 'https://project1-will12976-2.c9users.io/films?title='+searchFilm
    
})

myApp.controller('mapsearchController', function($scope, $http){
    
    var searchMap = $scope.searchMap
    var url = 'https://project1-will12976-2.c9users.io/maps?address='+searchMap
})

myApp.controller('detailController', function($scope, $routeParams) {
    
    
    
})

myApp.controller('favouritesController', function($scope){
    
    
    
})

myApp.controller('recentController', function($scope){
    
    
    
})

myApp.controller('homeController', function($scope){
    
    
    
})