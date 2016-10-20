(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//Controller for To Buy List part
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var vm = this;
  vm.items = ShoppingListCheckOffService.getShoppingList();
  vm.moveToBought = function(itemIndex){
    var item = ShoppingListCheckOffService.getItem(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
    ShoppingListCheckOffService.addBoughtItem(item.name, item.quantity);
  }
}

//Controller for Already Bought part
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var vm = this;
  vm.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService(){
  var vm = this;

  //Shopping List
  var shoppingList = [
    {
      name: "Watermelon",
      quantity: "1 Box"
    },
    {
      name: "Milk",
      quantity: "1.75 L"
    },
    {
      name: "Eggs",
      quantity: "1 Dozen"
    },
    {
      name: "Beef",
      quantity: "1 Pound"
    },
    {
      name: "Rice Noodle",
      quantity: "10 Bags"
    },
    {
      name: "Dumplings",
      quantity: "3 Bags"
    },
    {
      name: "Mochi (Green Tean Flavored)",
      quantity: "1 Box"
    }
  ]

  //List of bought items
  var boughtList = [];

  //services
  vm.getItem = function (itemIndex) {
  return shoppingList[itemIndex];
  };

  vm.removeItem = function (itemIndex) {
  shoppingList.splice(itemIndex, 1);
  };

  vm.addBoughtItem = function(itemName, itemQuantity){
    var item = {
      name: itemName,
      quantity: itemQuantity
    };
    boughtList.push(item);
  }

  vm.getShoppingList = function(){
    return shoppingList;
  }

  vm.getBoughtList = function(){
    return boughtList;
  }

}

})();
