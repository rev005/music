app.controller('MainController', ['$scope', function($scope) {

    $scope._Index = 0;
    $scope._Index1 = 0;

    $scope.isActive = function(index) {
        return $scope._Index === index;
    };

    $scope.showPhoto = function(index) {
        $scope._Index = index;
    };

    $scope.isActive1 = function(index) {
        return $scope._Index1 === index;
    };

    $scope.showPhoto1 = function(index) {
        $scope._Index1 = index;

        var nowPlaying = document.getElementsByClassName('playsong');
        
        $.each($('audio.playsong'), function() 
        {
            this.pause();
        });

        nowPlaying[index].autoplay = true;
        nowPlaying[index].load();
    };

    /***Important logic---working****/
    $scope.test = function() 
    {
        var nowPlaying = document.getElementsByClassName('playsong');
        
        $.each($('audio.playsong'), function() 
        {
            this.pause();
        });

        nowPlaying[$scope._Index1].autoplay = true;
        nowPlaying[$scope._Index1].load();

        /*var nowPlaying = audioArray[$scope._Index, $scope._Index1];
        console.log(nowPlaying);
        nowPlaying.autoplay = true;
        nowPlaying.load();*/
    };

    $scope.collections = [
        {
            artist: 'Madeon',
            cover: 'images/madeon.jpg',
            aname: 'Adventure(Deluxe)',
            title:['Isometric (Intro)' , 'Pay No More', 'Youre On' ,'OK', 'La Lune', 'Beings', 'Imperium', 'Zephyr' ],
            songs: ['songs/draft.mp3', 'songs/smile.mp3', 'song 3 in album 1', 'song 4 in album 1', 'song 5 in album 1', 'song 6 in album 1','song 7 in album 1','songs/high.mp3'],

        },

        {
            artist: 'Afrojack',
            cover: 'images/afrojack.jpg',
            aname: 'Forget The World',
            title:['Isometric (Intro)' , 'Pay No More', 'Youre On' ,'OK', 'La Lune', 'Beings', 'Imperium', 'Zephyr' ],
            songs: ['songs/draft.mp3', 'songs/smile.mp3', 'song 3 in album 1', 'song 4 in album 1', 'song 5 in album 1', 'song 6 in album 1','song 7 in album 1','songs/high.mp3'],
        }, 

        {
            artist: 'Zedd',
            cover: 'images/zedd.jpg',
            aname: 'True Colors',
            title:['Isometric (Intro)' , 'Pay No More', 'Youre On' ,'OK', 'La Lune', 'Beings', 'Imperium', 'Zephyr' ],
            songs: ['songs/draft.mp3', 'songs/smile.mp3', 'song 3 in album 1', 'song 4 in album 1', 'song 5 in album 1', 'song 6 in album 1','song 7 in album 1','songs/high.mp3'],
        },

        {
            artist: 'Maroon5',
            cover: 'images/Maps.jpg',
            aname: 'Adventure(Deluxe)',
            title:['Isometric (Intro)' , 'Pay No More', 'Youre On' ,'OK', 'La Lune', 'Beings', 'Imperium', 'Zephyr' ],
            songs: ['songs/draft.mp3', 'songs/smile.mp3', 'song 3 in album 1', 'song 4 in album 1', 'song 5 in album 1', 'song 6 in album 1','song 7 in album 1','songs/high.mp3'],
        },

        {
            artist: 'Madeon',
            cover: 'images/madeon.jpg',
            aname: 'Adventure(Deluxe)',
            title:['Isometric (Intro)' , 'Pay No More', 'Youre On' ,'OK', 'La Lune', 'Beings', 'Imperium', 'Zephyr' ],
            songs: ['songs/draft.mp3', 'songs/smile.mp3', 'song 3 in album 1', 'song 4 in album 1', 'song 5 in album 1', 'song 6 in album 1','song 7 in album 1','songs/high.mp3'],
        },

    ];

    // /***Important logic---working****/
    // $scope.test = function() {
    //     // alert('function working');
    //     var audioArray = document.getElementsByClassName('playsong');
    //     // console.log(audioArray);

    //     $.each($('audio.playsong'), function() {
    //         this.pause();
    //     });

    //     var nowPlaying = audioArray[$scope._Index, $scope._Index1];
    //     // alert('f'+ $scope._Index + 's' + $scope._Index1);
    //     nowPlaying.autoplay = true;
    //     nowPlaying.load();
    //     // alert(nowPlaying);

    //     /*$('.play').on('click', function(){
    //         $.each($('audio.playsong'),function(){
    //           this.pause();
    //         });
    //         nowPlaying.play();
    //     });*/
    // };

}]);
