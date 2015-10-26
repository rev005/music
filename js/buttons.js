$(document).ready(function(){

      $(".album-collection,#x").click(function(){
        $(".albums,.songs-list").toggle();
      });

      $("#toggle-up").click(function(){
        $(".player-cover").toggle( );
      });

      var audioArray = document.getElementsByClassName('playsong');
      console.log(audioArray);
      var nowPlaying = audioArray[0];
      nowPlaying.load();

      $('.play').on('click', function(){
          nowPlaying.play();
      });
      
      $('.stop').on('click', function(){
          nowPlaying.pause();
      });
	});


