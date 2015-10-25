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
      album:[
        {
          aname:'nick album-1',          
          songs:['songs/mr.mp3','songs/smile.mp3','song 3 in album 1',],
        },
      ],
    },

    {
      artist:'Taylor Swift',  
      cover:'images/red.jpg',
      album:
      [
        {
          aname:'taylor album-1',
          songs:['tsong 1 in album 1','tsong 2 in album 1','tsong 3 in album 1',]
        },        
      ],
    },
    {
      artist:'Maroon 5',  
      cover:'images/maps.jpg',
      album:
      [
        {
          aname:'taylor album-1',
          songs:['tsong 1 in album 1','tsong 2 in album 1','tsong 3 in album 1',]
        },        
      ],
    },

  ];

}]);


