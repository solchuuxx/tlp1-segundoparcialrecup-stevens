const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_actual = document.querySelector("#fecha_actual");
const fecha_salida_vuelo = document.querySelector("#fecha_salida_vuelo");
const asiento = document.querySelector("#asiento");
const origen = document.querySelector("#origen");
const destino = document.querySelector("#destino");

document.addEventListener("DOMContentLoaded", async () => {

  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_actual.value = data.fecha_actual;
  fecha_salida_vuelo.value = data.fecha_salida_vuelo;
  asiento.value = data.asiento;
  origen.value = data.origen;
  destino.value = data.destino;
});

formReserva.addEventListener("submit", async (e) => {
e.preventDefault();

reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_actual: fecha_actual.value,
    fecha_salida_vuelo: fecha_salida_vuelo.value,
    asiento: asiento.value,
    origen: origen.value,
    destino: destino.value,
};

  // Se envían los nuevos datos al servidor express
const response = await fetch(`/api/'${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
    "Content-Type": "application/json",
    },
});

const data = await response.json();

alert(data.message);


window.location.href = "/";

const respToJson = await response.json();

if (response.status !== 200) {
    return Swal.fire({
    title: "Error",
    text: respToJson.message,
    icon: "error",
    confirmButtonText: "Aceptar",
    });
}

  // Mostrar mensajes al usuario
Swal.fire({
    title: "Reserva actualizada",
    text: respToJson.message,
    icon: "success",
    confirmButtonText: "Aceptar",
});

setTimeout(() => {
    // Redireccionar al usuario
    window.location.href = "/";
}, 2000);
});