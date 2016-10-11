(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message = "";
  $scope.myClass = false;

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
      return "Please enter data first";
      $scope.myClass = true;
    } else if (totalNum < 3) {
      return "Enjoy!";

    } else {
      return "Too much!";
    
    };
  };

};


})();
