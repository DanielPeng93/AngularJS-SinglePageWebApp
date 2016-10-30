(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject=['$http'];
function MenuDataService($http){
  var service = this;

  service.getAllCategories = function (){

    var response = $http({
      method: 'GET',
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function (result){
      return result.data;
    });

    return response;

  }

  service.getItemsForCategory = function (categoryShortName){
    var response = $http({
      method: 'GET',
      url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      params: {
        category: categoryShortName
      }
    }).then(function (result){
      return result.data.menu_items;
    });

    return response;
  }

}

})();
