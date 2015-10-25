$(document).ready(function(){

      $(".album-collection,#x").click(function(){
        $(".albums,.songs-list").toggle();
      });

      $("#toggle-up").click(function(){
        $(".player-cover").toggle( );
      });
      
	});

/*function() {
              $( ".player" ).css( "height":"100vh" );
              $( ".player-cover" ).show();
            }, 
            function() {
              $( ".player" ).css( "height":"auto" );
              $( ".player-cover" ).hide();
            }*/