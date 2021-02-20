class Cotizacion {
  cotizar = function (tipo, forma, cliente) {
    let resultado = 0;

    let precioBase = 0;
    switch (tipo) {
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
    switch (forma) {
      case "wordpress":
        resultado = precioBase * 1.2;
        break;
      case "bootstrap":
        resultado = precioBase * 1.3;
        break;
    }
    switch (cliente) {
      case "grande":
        resultado = resultado * 1.4;
        break;
      case "mediana":
        resultado = resultado * 1.3;
        break;
      case "chica":
        resultado = resultado * 1.2;
        break;
      case "sin-lucro":
        resultado = resultado * 1.1;
        break;
    }
    return resultado;
  };

  convertir = function (moneda, valor) {
    $.ajax({
      url: "https://v6.exchangerate-api.com/v6/1fa78b958c4cae0f0c2d6e4b/pair/ARS/"
        .concat(moneda)
        .concat("/")
        .concat(valor),
      type: "GET",
      success: function (data) {
        cotizacion.innerHTML = buildCotizar(moneda, data.conversion_result);
      },
    });
  };
}

function buildNombre(nombre) {
  const htmlNombre = `
		<h3>Hola, <span class="text-warning">${nombre}</span></h3> 
		<h4>Gracias por comenzar con la cotización!</h4>
		`;
  return htmlNombre;
}

function buildEmpresa(empresa) {
  const htmlEmpresa = `
		<h5>El Presupuesto es para <span class="h4 text-warning">${empresa}</span></h5>
		<h5>Perfecto! Entonces Continuemos...</h5>
		`;
  return htmlEmpresa;
}

function buildDesign(design) {
  const htmlDesign = `
		<h5>El diseño lo haremos en <span class="h4 text-warning">${design}</span></h5>
		<h5>Perfecto! Entonces Continuemos...</h5>
		`;
  return htmlDesign;
}

function buildDesarrollo(desarrollo) {
  const htmlDesarrollo = `
		<h5>Muy Bien! Entonces vamos a diseñar un/a <span class="h4 text-warning">${desarrollo}</span></h5>
		<h5>¿Queres ver la cotizacion o te la enviamos?</h5>
		`;
  return htmlDesarrollo;
}

function buildCotizar(moneda, valor) {
  const htmlCotizar = `
		  <h3>El precio estimado es de <span class="text-warning">${moneda} ${valor}</span></h3> 
		  <h4>Gracias! En breve nos comuncaremos con usted!</h4>
		  `;
  return htmlCotizar;
}

const nombre = document.getElementById("nombre");
const empresa = document.getElementById("empresa");
const design = document.getElementById("design");
const desarrollo = document.getElementById("desarrollo");
const cotizacion = document.getElementById("cotizacion");

function onChange(event) {
  nombre.innerHTML = buildNombre(document.querySelector("#name").value);
}

function onEmpresa(event) {
  empresa.innerHTML = buildEmpresa(document.querySelector("#company").value);
}

function onDesign(event) {
  if (document.getElementById("wordpress").checked === true) {
    design.innerHTML = buildDesign("Wordpress");
  } else if (document.getElementById("bootstrap").checked === true) {
    design.innerHTML = buildDesign("Bootstrap");
  }
}

function onDesarrollo(event) {
  if (document.getElementById("corporativo").checked === true) {
    desarrollo.innerHTML = buildDesarrollo("Sitio Corporativo");
  } else if (document.getElementById("tienda").checked === true) {
    desarrollo.innerHTML = buildDesarrollo("Tienda Online");
  } else if (document.getElementById("one-page").checked === true) {
    desarrollo.innerHTML = buildDesarrollo("Sitio de Pagina Unica");
  }
}

function onCotizar(enviar) {
  let tipo = "";
  let forma = "";
  let cliente = "";

  if (document.getElementById("corporativo").checked === true) {
    tipo = "corporativo";
  } else if (document.getElementById("tienda").checked === true) {
    tipo = "tienda";
  } else if (document.getElementById("one-page").checked === true) {
    tipo = "one-page";
  }
  if (document.getElementById("wordpress").checked === true) {
    forma = "wordpress";
  } else if (document.getElementById("bootstrap").checked === true) {
    forma = "bootstrap";
  }
  cliente = document.querySelector("#cliente-tamano").value;

  const cotizacion1 = new Cotizacion();

  const total = cotizacion1.cotizar(tipo, forma, cliente);
  if (enviar) {
    alert(
      "Su pedido de cotizacion fue recibido el mismo sera enviado a su correo electronico"
    );
  } else {
    if (document.getElementById("ARS").checked === true) {
      cotizacion.innerHTML = buildCotizar("ARS", total);
    } else if (document.getElementById("EUR").checked === true) {
      cotizacion1.convertir("EUR", total);
    } else if (document.getElementById("USD").checked === true) {
      cotizacion1.convertir("USD", total);
    }
  }
}
// Jquery Animaciones

$("#paso1").on("click", function () {
  $("#personal-info").hide(1500, function () {
    $("#company-info").show(1500);
  });
});
$("#paso1ir").on("click", function () {
  $("#company-info").hide(1500, function () {
    $("#personal-info").show(1500);
  });
});
$("#paso2").on("click", function () {
  $("#company-info").hide(1500, function () {
    $("#desing-info").show(1500);
  });
});
$("#paso2ir").on("click", function () {
  $("#desing-info").hide(1500, function () {
    $("#company-info").show(1500);
  });
});
$("#paso3").on("click", function () {
  $("#desing-info").hide(1500, function () {
    $("#money-info").show(1500);
  });
});
$("#paso3ir").on("click", function () {
  $("#money-info").hide(1500, function () {
    $("#desing-info").show(1500);
  });
});
