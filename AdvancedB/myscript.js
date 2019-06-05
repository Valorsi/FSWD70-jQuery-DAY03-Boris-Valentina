$(document).ready(function(){
	$("#moveme").click( function(){
		$("#moveme").animate({
			bottom: '100px'
		}, 'slow', 'linear')
		$("#moveme").fadeOut(2000);
		$("#moveme").fadeIn(2000);
	});
});