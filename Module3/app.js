(function (){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)

  var items = [];

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){

    var list = this;
    list.searchItem = "";

    list.found = MenuSearchService.getItems();

    list.findItems = function (searchTerm) {
        if (items) {
            MenuSearchService.clearAll();
        }
        MenuSearchService.getMatchedMenuItems(searchTerm);
        console.log("'found' is: ", list.found);
      }

    list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
    };

  }

  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function (searchItem){
      //clear the result when there is no input
      if (!searchItem) {
          service.clearAll();
          return items;
      }

      var response = $http({
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result){
        result.data.menu_items.forEach(function(item){
          if( item.description.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1 ){
            items.push(item);
          }
        })
        return items;
      });


    }

    service.removeItem =  function (itemIndex){
      items.splice(itemIndex, 1);
    }

    service.getItems = function () {
      return items;
    }

    service.clearAll = function (){
      while (items.length > 0){
        items.pop();
      }
    }

  }

  function FoundItemsDirective(){
    var ddo = {
      templateUrl : 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    }
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  };

})();
