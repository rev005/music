$(document).ready(function(){

      $(".album-collection,#x").click(function(){
        $(".albums,.songs-list").fadeToggle();
      });

      $("#toggle-up, #toggle-down").click(function(){
        $(".player-cover, #small-song, #small-btns").slideToggle();
        $("#toggle-up, #toggle-down").toggle();
      });

      $(".play-small, .stop-small, .play-big, .stop-big").click(function(){
        $(".play-small, .stop-small, .play-big, .stop-big").toggle();
      });

      // $(".play-small, .stop-small, .play-big, .stop-big").click(function(){
      //   $("").toggle();
      // });

     /* var audioArray = document.getElementsByClassName('playsong');
      console.log(audioArray);
      var nowPlaying = audioArray[0];
      nowPlaying.load();

      $('.play').on('click', function(){
          nowPlaying.play();
      });
      
      $('.stop').on('click', function(){
          nowPlaying.pause();
      });*/
	});


