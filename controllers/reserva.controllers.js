const Reserva = require('../models/Reserva');
const ctrlReservas = {};

ctrlReservas.renderListaReservas = (req, res) => {
	res.render('listado-reserva');
}
ctrlReservas.renderFormNewReserva = (req, res) => {
	res.render('nueva-reserva');
}
ctrlReservas.renderFormEditarReserva = (req, res) => {
	const { id } = req.params;
	res.render('editar-reserva', { id });
}

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async(req, res) => {
	
}
// Obtener una reserva


// Crear una reserva
ctrlReservas.crearReserva = async(req, res) => {
	
}
// Actualizar una reserva
ctrlReservas.actualizarReserva = async(req, res) => {

}
// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async(req, res) => {

}

module.exports = ctrlReservas;