$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	$('.errorComida').hide();
	$('.resultComida').hide();

	
	$('.button').bind('click', function(event){
		var amount =0;
		var count = $('.checkbox:checked').length;
		if (count===0) {
			$('p.resultComida').hide();
			$('.errorComida').show();
			$('.errorComida').text('Debe seleccionar un tipo de comida');
		}
		else{
			$('form').find('.checkbox:checked').each(function(){
				if($(this).is('.checkbox:checked')){
					amount = amount + parseInt($(this).val());
				}
			});
			$('.errorComida').hide();
			$('p.resultComida').show();
			$('p.resultComida').text('La suma total es: ' + amount);
		}
		var data = $('.email').val();

		if(valid_email(data)){
			$('.error').hide();
			$('.result').show();
		}
		else{
			$('.error').show();
			$('.result').hide();
			$('.error').html('<h1>Ingrese una dirección de correo valida</h1>');
		}	

		event.preventDefault();

	});
	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}	
});