//add controller
fbook.controller('addController',function($scope,$firebaseArray,$state,recipeService){
    $scope.submitRecipe = function(){
        $scope.newRec = recipeService.all;
        $scope.newRec.$add({
            recipeName: $scope.recName,
            recipeIngredients: $scope.recIngredients,
            recipeDirections: $scope.recDirections
        });
        $state.go('home');
    };
});



fbook.controller('listController',function($scope,recipeService){
    $scope.recipes = recipeService.all;
});
 

fbook.controller('recipeController',function($scope,recipeService,$stateParams,$state){
    $scope.singleRecipe = recipeService.get($stateParams.id);
    $scope.ingList =  $scope.singleRecipe.recipeIngredients.split(';');
    $scope.prepList = $scope.singleRecipe.recipeDirections.split(';');
});





fbook.controller('deleteController',function($scope,recipeService,$state,$firebaseArray,$ionicActionSheet){
    $scope.recs = recipeService.all;
    
    $scope.showDetails = function(id) {
        $ionicActionSheet.show({
            destructiveText: 'Delete',
            titleText: 'Sure you want to delete?',
            cancelText: 'Cancel',
            destructiveButtonClicked: function() {
                var rem = $scope.recs.$getRecord(id);
                $scope.recs.$remove(rem);
                return true;
            }
        });
    };
});


fbook.controller('editController',function($scope,recipeService){
    $scope.editRecipes = recipeService.all;
});


fbook.controller('recipeEditController',function($scope,recipeService,$stateParams,$state){
    $scope.allRecs = recipeService.all;
    $scope.singleRecipe = recipeService.get($stateParams.id);
    $scope.title = $scope.singleRecipe.recipeName;
    $scope.ingredients =  $scope.singleRecipe.recipeIngredients;
    $scope.directions = $scope.singleRecipe.recipeDirections;
    $scope.myid = $scope.singleRecipe.$id;
    $scope.updateRecipe = function(id) {
        var ed = $scope.allRecs.$getRecord(id);
        ed.recipeName = $scope.title;
        ed.recipeIngredients = $scope.ingredients;
        ed.recipeDirections = $scope.directions;
        $scope.allRecs.$save(ed);
        $state.go('edit');
    };
});
