/* <![CDATA[ */
    jQuery(document).ready( function() {

	audioplayer1 = new MediaElementPlayer('#audioplayer1', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});


    jQuery(document).ready( function() {

	audioplayer2 = new MediaElementPlayer('#audioplayer2', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer3 = new MediaElementPlayer('#audioplayer3', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer4 = new MediaElementPlayer('#audioplayer4', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer5 = new MediaElementPlayer('#audioplayer5', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer6 = new MediaElementPlayer('#audioplayer6', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer7 = new MediaElementPlayer('#audioplayer7', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer8 = new MediaElementPlayer('#audioplayer8', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer9 = new MediaElementPlayer('#audioplayer9', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
   
    jQuery(document).ready( function() {

	audioplayer10 = new MediaElementPlayer('#audioplayer10', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    
    jQuery(document).ready( function() {

	audioplayer11 = new MediaElementPlayer('#audioplayer11', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer12 = new MediaElementPlayer('#audioplayer12', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer13 = new MediaElementPlayer('#audioplayer13', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer14 = new MediaElementPlayer('#audioplayer14', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer15 = new MediaElementPlayer('#audioplayer15', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
    jQuery(document).ready( function() {

	audioplayer16 = new MediaElementPlayer('#audioplayer16', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
jQuery(document).ready( function() {

	audioplayer17 = new MediaElementPlayer('#audioplayer17', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});
jQuery(document).ready( function() {

	audioplayer18 = new MediaElementPlayer('#audioplayer18', {
		loop: false,
		audioHeight:20,
		audioWidth: '70%',
		features: ['playpause','volume'],
        enableKeyboard: false,
		alwaysShowControls: true,
        startVolume: 1,
	});
});

/* ]]> */
                            var $ant = $(".anterior");
                            var $sig = $(".siguiente");
 /* using jquery (on, bind, etc)...*/                            
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer1').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });
                            
                            /* addEventListener */
                            var player = document.getElementById('audioplayer1'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text1 p").hide();
                                $("#text1 p").show( 'blind', 40000 , 'easeInQuart');
                                $("#text1 p").stop(true);
                                
                                });
                           $('#audioplayer1').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                             /* addEventListener */
                            var player = document.getElementById('audioplayer1'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true,true);
                                $('#audioplayer1').each(function(){this.player.setCurrentTime(0)})
                            });

                                /* using jquery (on, bind, etc)...*/
                            $('#audioplayer2').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer2'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer2').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer2').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer2'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                 $("#text2 p").hide();
                                $("#text2 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });

/* using jquery (on, bind, etc)...*/
                            $('#audioplayer3').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer3'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                               
                                $("*").stop(true, true);
                                $('#audioplayer3').each(function(){this.player.setCurrentTime(0)})
                              
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer3').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer3'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text3 p").hide();
                                $("#text3 p").show( 'blind', 48000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer4').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer4'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer4').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer4').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer4'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                               $ant.hide();
                                $sig.hide();
                                $("#text4 p").hide();
                                $("#text4 p").show( 'blind', 52000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer5').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer5'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer5').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer5').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer5'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text5 p").hide();
                                $("#text5 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer6').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer6'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer6').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer6').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer6'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                 $ant.hide();
                                $sig.hide();
                                $("#text6 p").hide();
                                $("#text6 p").show( 'blind', 50000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer7').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer7'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer7').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer7').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer7'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text7 p").hide();
                                $("#text7 p").show( 'blind', 52000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer8').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer8'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer8').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer8').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer8'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text8 p").hide();
                                $("#text8 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer9').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer9'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer9').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer9').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer9'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text9 p").hide();
                                $("#text9 p").show( 'blind', 50000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer10').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer10'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer10').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer10').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer10'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text10 p").hide();
                                $("#text10 p").show( 'blind', 40000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer11').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer11'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer11').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer11').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer11'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text11 p").hide();
                                $("#text11 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer12').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer12'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer12').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer12').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer12'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text12 p").hide();
                                $("#text12 p").show( 'blind', 50000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer13').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer13'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer13').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer13').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer13'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text13 p").hide();
                                $("#text13 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer14').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer14'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer14').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer14').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer14'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text14 p").hide();
                                $("#text14 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer15').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer15'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer15').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer15').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer15'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text15 p").hide();
                                $("#text15 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer16').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer16'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer16').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer16').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer16'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text16 p").hide();
                                $("#text16 p").show( 'blind', 57000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer17').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer17'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer17').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer17').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer17'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text17 p").hide();
                                $("#text17 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });
/* using jquery (on, bind, etc)...*/
                            $('#audioplayer18').bind('pause', function(f) { 
                                console.log('bind - pause') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer18'); 
                            player.addEventListener('pause', function(f) {
                                console.log('addEventListener - pause') ;
                                $ant.show();
                                $sig.show();
                                $("*").stop(true, true);
                                $('#audioplayer18').each(function(){this.player.setCurrentTime(0)})
                            });
                            /* using jquery (on, bind, etc)...*/
                            $('#audioplayer18').bind('playing', function(e) { 
                                console.log('bind - playing') 
                            });

                            /* addEventListener */
                            var player = document.getElementById('audioplayer18'); 
                            player.addEventListener('playing', function(e) {
                                console.log('addEventListener - playing') ;
                                $ant.hide();
                                $sig.hide();
                                $("#text18 p").hide();
                                $("#text18 p").show( 'blind', 55000 , 'easeInQuart');
                                stop(true);
                                });

