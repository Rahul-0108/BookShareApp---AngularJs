const app = angular.module("bookshare", []);
app.config(function ($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist(["file://**"]);
});

app.controller("login", function ($scope) {
 $scope.Users = [
  { FN: "Rahul Jaiswal", Email: "Rahul.Jaiswal@bentley.com", PS: "RJ" },
  { FN: "AB", Email: "Rahul.Jaiswal@bentley.com", PS: "CD" },
 ];
 $scope.Name = "";
 $scope.Password = "";
 $scope.isLoggedin = false;
 $scope.loginUser = function () {
  for (let i = 0; i < $scope.Users.length; i++) {
   if ($scope.Name == $scope.Users[i].FN && $scope.Password == $scope.Users[i].PS) {
    $scope.isLoggedin = true;
    break;
   }
  }
 };
 $scope.bookInfo = [
  { name: "C#", Author: "Yashvant  Kanetkar", Owner: "A", isRented: true },
  { name: "C++", Author: "Yashvant  Kanetkar", Owner: "B", isRented: true },
  { name: "Java", Author: "Yashvant  Kanetkar", Owner: "D", isRented: false },
  { name: "C", Author: "Yashvant  Kanetkar", Owner: "F", isRented: false },
  { name: "Go", Author: "Yashvant  Kanetkar", Owner: "H", isRented: true },
 ];
 $scope.isModelEnabled = false;
 $scope.bookRent = function (index) {
  $scope.isModelEnabled = true;
  $scope.bookName = $scope.bookInfo[index].name;
 };

 $scope.rentCurrentBook = function () {
  $scope.isModelEnabled = false;
  for (let i = 0; i < $scope.bookInfo.length; i++) {
   if ($scope.bookInfo[i].name == $scope.bookName) {
    $scope.bookInfo[i].isRented = true;
    break;
   }
  }
 };
});
