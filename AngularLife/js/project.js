var weeksApp = angular.module('yourlifeinweeksApp', []);

weeksApp.controller('WeeksCtrl', function ($scope) {
  $scope.weeks = [
                  {'name': '1'},
                  {'name': '2'},
                  {'name': '3'},
                  {'name': '4'},
                  {'name': '5'},
                  {'name': '6'},
                  {'name': '7'},
                  {'name': '8'},
                  {'name': '9'},
                  {'name': '10'},
                  {'name': '11'},
                  {'name': '12'},
                  {'name': '13'},
                  {'name': '14'}
  ];
});
