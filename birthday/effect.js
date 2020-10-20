$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){
  var vw;
  $(window).resize(function(){
	  vw = $(window).width()/2;
	$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
	$('#b11').animate({top:300, left: vw-300},500);
	$('#b22').animate({top:300, left: vw-200},500);
	$('#b33').animate({top:300, left: vw-100},500);
	$('#b44').animate({top:300, left: vw},500);
	$('#b55').animate({top:300, left: vw+100},500);
	$('#b66').animate({top:300, left: vw+200},500);
  });

  $('#turn_on').click(function(){
    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('body').addClass('peach');
    $(this).fadeOut('slow').delay(5000).promise().done(function(){
      playMusic();
    });
  });

  function playMusic() {
    var audio = $('.song')[0];
    audio.play();
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
    $('#bulb_red').addClass('bulb-glow-red-after');
    $('#bulb_blue').addClass('bulb-glow-blue-after');
    $('#bulb_green').addClass('bulb-glow-green-after');
    $('#bulb_pink').addClass('bulb-glow-pink-after');
    $('#bulb_orange').addClass('bulb-glow-orange-after');
    $('body').css('backgroud-color','#FFF');
    $('body').addClass('peach-after');

    callFunctionAfterTimeout(bannarComing, 4000);
  }

  function bannarComing() {
    $('.bannar').addClass('bannar-come');

    callFunctionAfterTimeout(balloonsFlying, 6000);
  }

  function balloonsFlying() {
    $('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
    loopSix();

    callFunctionAfterTimeout(cakeFadein, 10000);
  }

  function cakeFadein() {
    $('.cake').fadeIn('slow');

    callFunctionAfterTimeout(lightCandle, 1500);
  }

  function lightCandle() {
    $('.fuego').fadeIn('slow');

    callFunctionAfterTimeout(wishMessage, 8000);
  }

  function wishMessage() {
    vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b11').animate({top:300, left: vw-300}, 3000);
		$('#b22').animate({top:300, left: vw-200}, 3000);
		$('#b33').animate({top:300, left: vw-100}, 3000);
		$('#b44').animate({top:300, left: vw}, 3000);
		$('#b55').animate({top:300, left: vw+100}, 3000);
		$('#b66').animate({top:300, left: vw+200}, 3000);
		$('.balloons').css('opacity','0.9');
    $('.balloons h2').fadeIn(3000);

    $('.message').fadeIn(3000);
  }

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
  }

	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
  }

	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
  }

	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
  }

	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
  
  function callFunctionAfterTimeout(func, timeout) {
    setTimeout(func, timeout)
  }

});
