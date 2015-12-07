angular.module('populationApp', [])
.controller('populationCtrl', function($scope, Data){
       $scope.pop =Data;

})
.factory('Data', function($http){

var currPopulation =[];

 $http({
  method: 'GET',
  url: 'http://api.population.io/1.0/population/World/today-and-tomorrow/'
}).then(function successCallback(response) {
   currPopulation.push(response.data.total_population[0].population);

  }, function errorCallback(response) {
    return response;
  });
return currPopulation;


});