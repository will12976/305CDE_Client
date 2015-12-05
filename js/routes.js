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
        var idOld = id
        var convert = JSON.stringify(id)
        console.log('adding: '+id+' to favourites.')
        localStorage.setItem(convert, idOld)
    }
})

myApp.controller('detailController', function($scope, $routeParams) {
    
    
    
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
    
})

myApp.controller('recentController', function($scope){
    
    
    
})

myApp.controller('homeController', function($scope){
    
    
    
})