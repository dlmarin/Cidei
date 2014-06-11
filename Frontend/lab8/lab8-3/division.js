var logic = require('./logic');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	res.end(
		logic.page('División', logic.navbar(),
			[
				(!isNaN(req.a) && !isNaN(req.b) && (req.b!=0) ? ('<p> {a} / {b} = {sq} </p>')
				.replace('{a}', req.a)
				.replace('{b}', req.b)
				.replace('{sq}', (req.a / req.b)) :''),
				'<p>Ingrese dividendo y divisor</p>',
				'<form name="dividendo" action="/division" method="get">',
				'Dividendo: <input type="text" name="a">',					
				'Divisor: <input type="text" name="b">',
				'<button type="submit">Calcular</button>',
				"</form>"				
			].join('\n'))
		);
}