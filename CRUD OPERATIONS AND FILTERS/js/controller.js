  var app = angular.module("bankApp", ['ngRoute']);

  app.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider.when('/', {
        templateUrl : 'views/details.html',
        controller : 'balanceController'
    });
    $routeProvider.when('/policy_1', {
        templateUrl : 'views/policy_1.html',
        
       
    });
    $routeProvider.when('/policy_2', {
        templateUrl : 'views/policy_2.html',
        
       
    });
    $routeProvider.when('/policy_3', {
        templateUrl : 'views/policy_3.html'
    });
    $routeProvider.when('/policy_4', {
        templateUrl : 'views/policy_4.html'
    });
    $routeProvider.when('/policy_5', {
        templateUrl : 'views/policy_5.html'
    });
    
    $routeProvider.otherwise('/');
    }
    ]);
    
app.controller("balanceController", function($scope){
 
$scope.newUser={};
$scope.clickedUser={};
$scope.message="";

$scope.users = [
    {"acc":"AC001","name":"Smith","balance":"1234","email":"smith@gmail.com"},
    {"acc":"AC002","name":"Andrew","balance":"3434","email":"andrew@gmail.com"},
    {"acc":"AC003","name":"Snow","balance":"1564","email":"snow@gmail.com"},
    {"acc":"AC004","name":"Roo","balance":"1289","email":"roo@gmail.com"},
    {"acc":"AC005","name":"Jacob","balance":"1894","email":"jacob@gmail.com"},
];

// Save new User

$scope.saveUser = function(){
  console.log($scope.newUser);
  $scope.users.push($scope.newUser);
  $scope.message="New User Added Successfully.";
};

// select User

$scope.selectUser = function(user){
  console.log(user);
  $scope.clickedUser = user;

};

//Update user

$scope.updateUser = function(){
$scope.message="User Updated Successfully.";
};

// Remove Selected User
$scope.deleteUser = function(d){
  var d = $scope.clickedUser;
  console.log(d);
  $scope.users.splice($scope.users.indexOf(d),1);
  $scope.message="User Deleted Successfully.";

 };

 $scope.clearMessage = function(){
  $scope.message = "";
 }

$scope.reset = function(){
  $scope.searchText = "";
 }
});