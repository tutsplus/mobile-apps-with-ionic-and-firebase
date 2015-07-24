// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var fbook = angular.module('foodbook', ['ionic','firebase']);

fbook.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


fbook.config(function($stateProvider,$urlRouterProvider) {
  
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "home.html"
  });
  $stateProvider.state("recList", {
    url: "/recList",
    templateUrl: "recList.html",
    controller: "listController"
  });
  $stateProvider.state("singleRecipe", {
    url: "/:id",
    templateUrl: "singleRec.html",
    controller: "recipeController"
  });
  $stateProvider.state("add", {
    url: "/add",
    templateUrl: "add.html",
    controller: "addController"
  });
  $stateProvider.state("del", {
    url: "/del",
    templateUrl: "delRec.html",
    controller: "deleteController"
  });
  $stateProvider.state("edit", {
    url: "/edit",
    templateUrl: "edit.html",
    controller: "editController"
  });
  $stateProvider.state("one", {
    url: "/edit/:id",
    templateUrl: "editOne.html",
    controller: "recipeEditController"
  });
  
  $urlRouterProvider.otherwise("/");
  
});