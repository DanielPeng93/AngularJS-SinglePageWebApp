(function () {
'use strict';
var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('youI', youtoIFilter)
.filter('custom', angularCustomFilter);

MsgController.$inject = ['$scope', 'youIFilter', '$timeout'];
function MsgController($scope, youIFilter, $timeout) {
  $scope.name = "Daniel";
  $scope.stateOfBeing = "Duck.jpg";
  $scope.cookieCost = .45;
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.counter1 = 0;
  $scope.firstName = "Xin";
// $scope.fullName = "";
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;


  $scope.addToList = function (){
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    }
    shoppingList2.push(newItem);
  }

  $scope.setFullName = function () {
    $scope.fullName = $scope.firstName + " " + "Peng";
  };

  $scope.logFirstName = function () {
    console.log("First name is: ", $scope.firstName);
  };

  $scope.logFullName = function () {
    console.log("Full name is: ", $scope.fullName);
  };

  $scope.upCounter1 = function () {
    $timeout(function () {
      $scope.counter1++;
      console.log("Counter1 incremented!");
    }, 2000);
  };


  $scope.sayMessage = function () {
    return "You thought you are just an ugly duckling.";
  };

  $scope.sayIMessage = function () {
    var msg =  "You thought you are just an ugly duckling.";
    msg = youIFilter(msg);
    return msg;

  };

  $scope.growUp = function () {
    $scope.stateOfBeing = "WhiteSwan.jpg";
  };

  $scope.showNumberOfWatchers = function () {
  console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter++;
  };

  $scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })


}

function youtoIFilter(){
  return function(input){
    input = input || "";
    input =  input.replace("You", "I");
    return input;
  }
}

function angularCustomFilter(){
  return function(input, target, replace){
    input = input || "";
    input =  input.replace(target, replace);
    return input;
  }
}
})();
