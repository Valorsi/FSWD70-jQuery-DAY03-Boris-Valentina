$(document).ready(function() {
	$('.phone').css('background-color', 'rgba(165,29,49,0.5)');
	$('.laptop').css('background-color', 'rgba(0,243,149,0.5)');
	$('.tablet').css('background-color', 'rgba(1,24,113,0.5)');
	$ (function(){
		var $laptop = $('#laptop').clone();
		$('.container').append($laptop);
	});
	$ (function(){
		var $phone = $('#phone').clone();
		$('.container').append($phone);
	})
	
})


