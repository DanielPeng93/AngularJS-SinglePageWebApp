(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Daniel";
  $scope.stateOfBeing = "Duck.jpg";

  $scope.sayMessage = function () {
    return "You thought you are just an ugly duckling.";
  };

  $scope.growUp = function () {
    $scope.stateOfBeing = "Swan.jpg";
  };
}

})();
