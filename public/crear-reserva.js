const formCrearReserva = document.querySelector("#formNuevaReserva")

formCrearReserva.addEventListener('submit', async (e) => {
	e.preventDefault(); 

	const nombre = document.querySelector('#nombre').value;
	const apellido = document.querySelector('#apellido').value;
	const fecha_actual = document.querySelector('#fecha_actual').value;
	const fecha_salida_vuelos = document.querySelector('#fecha_salida_vuelos').value;
	const asiento = document.querySelector('#asiento').value;
	const origen = document.querySelector('#origen').value;
	const destino = document.querySelector('#destino').value;

	const nuevaReserva = {
	nombre,
	apellido,
	fecha_actual,
	fecha_salida_vuelos,
	asiento,
	origen,
	destino
	}
    
	//Verificar siempre en sources si es que los archivos se están cargando de la forma correcta.

	const response = await fetch('http://localhost:4000/api', {
	method: 'POST'
	body: JSON.stringify(nuevaReserva)
	});


	const { message } = await response.json()
	if(!response.ok){
		alert('ERROR:', message)
		console.error(message);
	} 
	alert(message);
});