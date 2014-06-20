$(document).ready(function(){

	$('#btnRojo').bind('click', function(event){
		$('.labelRojo').addClass('cambiar-color-rojo');
	});

	$('#btnVerde').bind('click', function(event){
		$('.labelVerde').addClass('cambiar-color-verde');
	});
});