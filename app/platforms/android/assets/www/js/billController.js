billApp.controller('BillCtrl', function ($scope) {
  $scope.items = [
    {'name': 'Nachos',
     'price': '$8.00',
     'category': 'food',
     'splitby': '1',
     'guests': '',
     'quantity':'2'},
    {'name': 'Tatter Tots',
     'price': '$6.95',
     'category': 'food',
     'splitby': '1',
     'guests': '',
     'quantity':'3'},
    {'name': 'Sliders',
     'price': '$12.95',
     'category': 'food',
     'splitby': '1',
     'guests': 'Courtney',
     'quantity':'1'},
     {'name': 'Burger',
      'price': '$14.95',
      'category': 'food',
      'splitby': '1',
      'guests': '',
      'quantity':'.5'}
  ];

  /*$scope.currentguest = item.guests[0];*/

  $scope.setGuest = function(guestId) {
    //$scope.currentguest = guestId;
    console.log(guestId);
  }

  $scope.thisUser= {};

  $scope.update = function(currentItem, yourName) {
  // Example with 1 argument
    console.log(currentItem);
    currentItem.guests = currentItem.guests + " " + yourName;
    console.log(currentItem.guests);
    //$scope.thisUser = angular.copy(item);
    //$scope.thisUser = angular.copy($scope.items, $scope.thisUser);
  };


});
