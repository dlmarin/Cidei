$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	$('.errorRadio').hide();
	
	$('.button').bind('click', function(event){
		var amount =0;
		var count = $('input:checked').length;
		if (count===0) {
			$('p.result').hide();
			$('.error').show();
			$('.error').text('Debe seleccionar un tipo de comida');
		}
		else{
			$('form').find(':checked').each(function(){
				if($(this).is(':checked')){
					amount = amount + parseInt($(this).val());
				}
			});
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('La suma total es: ' + amount);
		}

		event.preventDefault();

	});
});