app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'nick black xD'; 
  $scope.chapter = 'Chapter pages';

$scope._Index = 0;

$scope.isActive = function (index)
{
    return $scope._Index === index;
};


$scope.showPhoto = function (index) {
          $scope._Index = index;
      };

$scope._Index1 = 0;

$scope.isActive1 = function (index)
{
    return $scope._Index1 === index;
};


$scope.showPhoto1 = function (index) {
    $scope._Index1 = index;
};

  $scope.collections=
  [
    {
      artist:'Nickle Black',    
      cover:'images/nick.png',        
      aname:'nick album-1',          
      songs:['songs/mr.mp3','songs/smile.mp3','song 3 in album 1','song 4 in album 1','5','6','7','8','9',],
        
    },

    {
      artist:'Taylor Swift',  
      cover:'images/red.jpg',      
      aname:'taylor album-1',
      songs:['tsong 1 in album 1','tsong 2 in album 1','tsong 3 in album 1',]
        
    },
    {
      artist:'Maroon 5 test',  
      cover:'images/maps.jpg',
      aname:'maroon5 album-1',
      songs:['m 1 in album 1','m 2 in album 1','m 3 in album 1',]
    },

  ];

}]);


