// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();

const {
    renderListaReservas,
    renderFormNewReserva,
    renderFormEditarReserva,
    obtenerReservas,
    crearReserva,
    eliminarReserva,
    actualizarReserva
} = require('../controllers/reserva.controllers')


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', (req, res) => {
	res.render('listado-reserva')
});

// Formulario para crear una reserva
router.get('/crear-reserva', (req, res) => {
	res.render('nueva-reserva');
});
// Formulario para actualizar una reserva
router.get('/actualizar-reserva/:id', (req, res) => {
	const { id } = req.params;
	res.render('editar-reserva', { id })
});

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/',);
 
// Crear una reserva
router.post('/api/',);
 
// Actualizar una reserva
router.put('/api/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',);

 
 module.exports = router;