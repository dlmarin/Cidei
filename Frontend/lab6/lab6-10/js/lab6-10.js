$(document).ready(function(){
	$('.error').hide();
	$('.errorComida').hide();
	$('.resultComida').hide();
	$('.errorNombre').hide();
	$('.password-error').hide();
	$('.conf-password-error').hide();
	$('.errorTarjeta').hide();
	$('.errorCity').hide();
	$('.result1').hide();
	$('.result2').hide();
	$('.result3').hide();
	$('.result4').hide();
	$('.result5').hide();
	
	$('.button').bind('click', function(event){

		var nomb = $('.nombre').val();
		var nomb1 = nomb.length;			

		if(nomb === ""){
			$('.result1').hide();
			$('.errorNombre').show();
			$('.errorNombre').text('Ingrese su nombre y apellido');
		}
		else{
		if(nomb1 <= 30){
				$('.errorNombre').hide();
				localStorage.setItem('nombres y apellidos', nomb);
				$('.result1').show();
				$('.result1').text('Los nombres y apellidos son: ' + localStorage.getItem('nombres y apellidos'));
			}		
			else{
				$('.result1').hide();
				$('.errorNombre').show();
				$('.errorNombre').text('El nombre y apellido no puede superar los 30 caracteres');
			}	
		}
		var data = $('.email').val();

		if(valid_email(data)){
			$('.error').hide();
			$('.result2').show();
			localStorage.setItem('correo', data);
			$('.result2').text('El email es: ' + localStorage.getItem('correo'));
		}
		else{	
			$('.result2').hide();		
			$('.error').show();
			$('.error').text('Dirección de correo invalida');
		}	

		var amount =0;
		var count = $('.checkbox:checked').length;	

		if (count===0) {		
			$('.result3').hide();			
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
			$('.result3').show();		
			localStorage.setItem('Valor total', amount);
			$('.result3').text('La suma total es: ' + localStorage.getItem('Valor total'));
		}

		var amount = 0;
		var count = $('.radio:checked').length;
		
		if (count===0) {
			$('.result4').hide();
			$('.errorTarjeta').show();
			$('.errorTarjeta').text('Debe seleccionar el tipo de pago');			
		}
		else{
			$('.result4').show();
			$('.errorTarjeta').hide();			
			localStorage.setItem('tipo pago', $('.radio:checked').attr('value'));
			$('.result4').text('El tipo de pago es: ' + localStorage.getItem('tipo pago'));
		}

		var city = $('select option:selected').val();

		if(city == "0"){
			$('.result5').hide();
			$('.errorCity').show();
			$('.errorCity').text('Debe seleccionar una ciudad');			
		}
		else{
			$('.result5').show();
			$('.errorCity').hide();
			localStorage.setItem('ciudad', city);
			$('.result5').text('La ciudad es: ' + localStorage.getItem('ciudad'));
		}

		var data = $('.password').val();
		var len = data.length;

		if(len<1 && len !== ""){			
			$('.password-error').show();
			$('.password-error').text('Ingrese una contraseña');
		}
		else{
			$('.password-error').hide();			
		}

		var confData = $('.confpass').val();
		var len = confData.length;

		if(len<1 && len !== ""){
			$('.conf-password-error').show();
			$('.conf-password-error').text('Confirme la contraseña');
		}
		else{
			$('.conf-password-error').hide();

			if($('.password').val() !== $('.confpass').val()){
				$('.conf-password-error').show();
				$('.conf-password-error').text('La contraseña no es igual');
			}
			else{
				$('.conf-password-error').hide();
				localStorage.setItem('password', data);
			}
		}

		event.preventDefault();

	});
	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}	
});