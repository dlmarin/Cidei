$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(event){
		$('.infobox').each(function(){
			var data = $(this).val();
			var len = data.length;

			if(len < 1){
				var campo = $(this).attr('name');
				if(campo === "userid"){
					$(this).parent().find('.error').show().text("Por favor ingrese su usuario");
				}
				if(campo === "password"){
					$(this).parent().find('.error').show().text("Por favor ingrese su password");
				}
			}
			else{
				$(this).parent().find('.error').hide();
			}
		});
		event.preventDefault();
	});
});