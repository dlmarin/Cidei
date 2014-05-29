$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	
	$('.submit').bind('click', function(event){
		var data = $('.infobox').val();

		if(valid_email(data)){
			$('.error').hide();
			$('.result').show();
			localStorage.setItem('correo', data);
			
			$('.result').text('El correo es: ' + localStorage.getItem('correo'));
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