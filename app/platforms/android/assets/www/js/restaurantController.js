var billApp = angular.module('billApp', []);

billApp.controller('RestaurantListCtrl', function ($scope) {
  $scope.restaurants = [
    {'name': 'Professor Thoms',
     'snippet': 'Watch the Patriots game here!',
     'distance':'2'},
    {'name': 'Sophies',
     'snippet': 'Check here if you can not find Chris Miles',
     'distance':'3'},
    {'name': 'Organeeeeeeck',
     'snippet': 'Amandas sandwich joint',
     'distance':'1'},
     {'name': 'Green Mile',
      'snippet': 'less than a mile',
      'distance':'.5'}
  ];
});
