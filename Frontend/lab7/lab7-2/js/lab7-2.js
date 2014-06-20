$(document).ready(function(){

	$('#btnEstilos').bind('click', function(event){
		$('.titulos').addClass('color');
		event.preventDefault();
	});
	
});