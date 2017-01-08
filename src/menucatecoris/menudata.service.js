(function () {
  'use strict';

angular.module('MenuApp')
.service('MenuDataService', 'MenuDataService');


function getAllCategories() {

  $http({
    url: 'https://davids-restaurant.herokuapp.com/categories.json',

  })

}

function getItemsForCategory(categoryShortName)() {


  $http({
    url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
    
  })
}

})();
