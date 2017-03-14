function imprimirPaciente(){

	var nombre 						= document.getElementById("name").value
	var apellido			 		= document.getElementById("lastname").value
	var edad 						= document.getElementById("age").value
	var ciudad 						= document.getElementById("city").value
	var eleccionGenero 				= document.getElementById("gender");
	var eleccionGeneroSeleccionada 	= eleccionGenero.options[eleccionGenero.selectedIndex].value
	var eleccionPais 				= document.getElementById("country");
	var eleccionPaisSeleccionada 	= eleccionPais.options[eleccionPais.selectedIndex].value
	var array = new Array();

	array.push({nombre: nombre, apellido: apellido, edad: edad, ciudad: ciudad})

	array.forEach(function(element){

		var div = document.createElement("div");
		var parrafoNombre = document.createElement("p");
		parrafoNombre.innerHTML = "Nombre: " + element.nombre + " " + element.apellido;
		var parrafoEdad = document.createElement("p");
		parrafoEdad.innerHTML = "Edad: " + element.edad;
		var parrafoPais = document.createElement("p");
		parrafoPais.innerHTML = "País " + eleccionPaisSeleccionada

		div.appendChild(parrafoNombre)
		div.appendChild(parrafoEdad)
		div.appendChild(parrafoPais)
		document.getElementById("pacientes").appendChild(div);

		/*divPacientes.innerHTML = "Datos del paciente \n" +
								   "Nombre: " + element.nombre + " " + element.apellido + "\n" +
								   "Edad: " + element.edad + "\n" +
								   "País: " + element.pais + "\n";
*/
	
						/*	 alert("Datos del paciente \n" +
								   "Nombre: " + element.nombre + " " + element.apellido + "\n" +
								   "Edad: " + element.edad + "\n" +
								   "País: " + element.pais + "\n") */
  		
	})

}