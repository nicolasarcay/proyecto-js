	
	function buildNombre(nombre){
		const htmlNombre = `
		<h3>Hola, ${nombre}</h3> 
		<h4>Gracias por comenzar con la cotización!</h4>
		`;
		return htmlNombre;
	};

	function buildEmpresa(empresa){
		const htmlEmpresa = `
		<h5>El Presupuesto es para <span class="h4">${empresa}</span></h5>
		<h5>Perfecto! Entonces Continuemos...</h5>
		`;
		return htmlEmpresa;
	};
	function buildDesign(design){
		const htmlDesign = `
		<h5>El diseño lo haremos en <span class="h4">${design}</span></h5>
		<h5>Perfecto! Entonces Continuemos...</h5>
		`;
		return htmlDesign;
	};
	function buildDesarrollo(desarrollo){
		const htmlDesarrollo = `
		<h5>Muy Bien! Entonces vamos a diseñar un/a <span class="h4">${desarrollo}</span></h5>
		<h5>¿Queres er la cotizacion o te la enviamos?</h5>
		`;
		return htmlDesarrollo;
	};
	const nombre = document.getElementById('nombre')
	const empresa = document.getElementById('empresa')
	const design = document.getElementById('design')
	const desarrollo = document.getElementById('desarrollo')
	
	function onChange(event){
		nombre.innerHTML = buildNombre(document.querySelector('#name').value);
	};
	
	function onEmpresa(event){
		empresa.innerHTML = buildEmpresa(document.querySelector('#company').value);
	};
	
	function onDesign(event){
		if (document.getElementById('wordpress').checked === true){
			design.innerHTML = buildDesign('Wordpress');

		}else if (document.getElementById('bootstrap').checked === true) {
			design.innerHTML = buildDesign('Bootstrap');
		}
	};
	
	function onDesarrollo(event){
		if (document.getElementById('corporativo').checked === true){
			desarrollo.innerHTML = buildDesarrollo('Sitio Corporativo');

		}else if (document.getElementById('tienda').checked === true) {
			desarrollo.innerHTML = buildDesarrollo('Tienda Online');
		}
		else if (document.getElementById('one-page').checked === true) {
			desarrollo.innerHTML = buildDesarrollo('Sitio de Pagina Unica');
		}
	};

	/*class Cotizacion {

	tipo = '';
	forma = '';
	cliente = '';

	constructor (tipo, forma, cliente) {
		this.tipo = tipo;
		this.forma = forma;
		this.cliente = cliente;
	};
	function cotizar(){
		
		let resultado = 0;

		let precioBase = 0;
		switch(this.tipo){
			case "one-page":
				precioBase = 15000;
				break;
			case "corporativo":
				precioBase = 20000;
				break;
			case "tienda":
				precioBase = 30000;
				break;
		}
		switch(this.forma){
			case "wordpress":
				resultado = precioBase * 1.2
				break;
			case "bootstrap":
				resultado = precioBase * 1.3
				break;
		}
		switch(this.cliente){
			case "grande":
				cotizacion = resultado * 1.4
				break;
			case "mediana":
				cotizacion = resultado * 1.3
				break;
			case "chica":
				cotizacion = resultado * 1.2
				break;
			case "sin-lucro":
				cotizacion = resultado * 1.1
				break;
		}
		return cotizacion;
	}
	};*/

	function onVerCotizacion(){

		let tipo = document.getElementById('tipo').value;
		let forma = document.getElementById('forma').value; 
		let cliente = document.getElementById('cliente').value; 
		console.log(tipo, forma, cliente)
		/*let cotizacion1 = new Cotizacion(tipo, forma, cliente);
		let total = cotizacion.cotizar();

		document.getElementbyId('total').value = total;*/
	};