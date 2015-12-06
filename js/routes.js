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
        .when('/details/:title/:plot/:link/:time/:id', {
            templateUrl: 'templates/details.html',
            controller: 'detailController'
        })
        .when('/detailsMap/:id/:add/:loc/:lat/:lng', {
            templateUrl: 'templates/detailsMap.html',
            controller: 'detailsMapController'
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
        .otherwise({
            redirectTo: 'home'
        })

    
}])
//$http meaning, it sends a http request to my api, to get the third-party data
myApp.controller('filmsearchController', function($scope, $http, $window){

    $scope.greeting = 'Welcome to the film search!'
    $scope.filmSearch = function($event) {
        if ($event.which == 13) {
            var filmsearch = $scope.filmTerm
            var url = 'https://project1-will12976-2.c9users.io/films?title='+filmsearch
            $http.get(url).success(function(response){
                $scope.films = response.data
                $scope.filmTerm = ''
            })
            
        }
        $scope.searched = 'You have searched for '
        $scope.sfilm = filmsearch
        
    }
})

myApp.controller('mapsearchController', function($scope, $http){
    $scope.greeting = 'Welcome to the map search!'
    $scope.mapSearch = function($event) {
        if($event.which == 13) {
            var mapsearch = $scope.mapTerm
            var url = 'https://project1-will12976-2.c9users.io/maps?address='+mapsearch
            $http.get(url).success(function(response){
                $scope.maps = response.data
                $scope.mapTerm = ''
            })
        }
        $scope.searched = 'You have searched for '
        $scope.smap = mapsearch
    }
    $scope.addToFavourites = function(id) {
        localStorage.setItem(id, id)
    }

})

myApp.controller('detailController', function($scope, $routeParams) {
    
    $scope.title = $routeParams.title
    $scope.plot = $routeParams.plot
    $scope.link = $routeParams.link
    $scope.time = $routeParams.time
    $scope.id = $routeParams.id
    $scope.addToFavourites = function(title) {
        localStorage.setItem(title, title)
        $scope.message = 'This has been added to your favourites'
    }
})

myApp.controller('detailsMapController', function($scope, $routeParams){
    
    $scope.id = $routeParams.id
    $scope.address = $routeParams.add
    $scope.loc = $routeParams.loc
    $scope.lat = $routeParams.lat
    $scope.lng = $routeParams.lng
    $scope.addToFavourites = function(place) {
        localStorage.setItem(place, place)
        $scope.message = 'This has been added to your favourites'
    }
})

myApp.controller('favouritesController', function($scope){
    var init = function() {
        var items = Array()
        for (var a in localStorage) {
            items.push(localStorage[a])
        }
        $scope.films = items
    }
    init()
    $scope.delete = function(film) {
        localStorage.removeItem(film)
        window.location.reload();
    }
    $scope.clearList = function(){
        localStorage.clear()
        window.location.reload();
    }
    
})

myApp.controller('homeController', function($scope){
    
    $scope.message = 'Welcome to my AngularJS Client!'
    
})
