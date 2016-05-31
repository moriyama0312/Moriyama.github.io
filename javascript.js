$(document).ready(function(){

	$('.header-right').hover(function(){
		$('#menu').show();
	},
	function() {
		$("#menu").hide();
	});

	$('#profile-show').click(function(){
		$('#profile-modal').fadeIn();
	});

	$('#like-show').click(function(){
		$('#like-modal').fadeIn();
	});

	$('#gallary-show').click(function(){
		$('#gallary-modal').fadeIn();
	});

	$('.close-modal').click(function(){
		$('#profile-modal').fadeOut();
		$('#like-modal').fadeOut();
		$('#gallary-modal').fadeOut();
	});

	$('.ef').textillate();
/*	$('.ef').shuffleLetters(); */

	$('.demo').t({
		speed_vary: true,
	});

	$('.lesson-icon').jrumble({
		x: 2,
		rumbleSpeed: 5
	});
	$('.lesson-icon').trigger('startRumble');

	window.onload=function() {
		var elements = document.querySelectorAll('.intense');
		Intense(elements);
	}

	var position = $(".lessons").offset().top;

	$("#menu").click(function(){
    	$("html,body").animate({
       	 scrollTop : position
    	},
    	 {
        	queue : false
    	});
	});


});