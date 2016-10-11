(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message = "";
  $scope.myClass;

  $scope.checkIfTooMuch = function () {
    $scope.message = checkNum($scope.menu);
  };

  function checkNum(string){
    var strArr = string.split(",");
    var totalNum = 0;
    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i].length!=0) {
        totalNum ++;
      }
    }
    if (totalNum == 0) {
      $scope.myClass = true;
      return "Please enter data first";
    } else if (totalNum < 3) {
      $scope.myClass = false;
      return "Enjoy!";

    } else {
      $scope.myClass = false;
      return "Too much!";

    };
  };

};


})();
