const Reserva = require('../models/Reserva');
const ctrlReservas = {};

ctrlReservas.renderListaReservas = (req, res) => {
	res.render("listado-reserva");
};

ctrlReservas.renderFormNewReserva = (req, res) => {
	res.render("nueva-reserva");
};

ctrlReservas.renderFormEditarReserva = (req, res) => {
	const { id } = req.params;
	res.render("editar-reserva", { id });
};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                id
            }
        });

        return res.json(reservas);
    } catch (error) {
        console.log('Error al obtener las reservas', error);
        return res.status(500).json({
            message: 'Error al obtener las reservas'
        });
    }
}

// Obtener una reserva
ctrlReservas.obtenerReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener la reserva'
        })
    }
}

// Crear una reserva
ctrlReservas.crearReserva = async (req, res) => {
    const {
        nombre,
        apellido,
        fecha_actual,
        fecha_salida_vuelo,
        asiento,
        origen,
        destino
    } = req.body;

    try {
        const nuevaReserva = new Reserva({
            nombre,
            codigo: new Date().getTime(),
            apellido,
            fecha_actual,
            fecha_salida_vuelo,
            asiento,
            origen,
            destino
        });
        await nuevaReserva.save();

        return res.status(201).json({ message: 'Reserva creada' })
    } catch (error) {
        console.log('Error al crear la reserva', error);
        return res.status(500).json({ message: 'Error al crear' })
    }
}
// Actualizar una reserva
ctrlReservas.actualizarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        await reserva.update(req.body)

        return res.status(201).json({ message: "Reserva actualizada" });
    } catch (error) {
        console.log('Error al actualizar la reserva', error);
        return res.status(error.status || 500).json({
            message: error.message
        })
    }
}

// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            throw{
                status: 400,
                message: 'No se ha enviado el id'
            }
        }

        const reserva = await Reserva.findByPk(id);

        if (!reserva) {
            throw {
                status: 404,
                message: "No se encontró la reserva",
            };
        }
    
        await reserva.destroy({ estado: false });
    
        return res.json({ message: "Reserva eliminada" });
    } catch (error) {
        console.log('Error al eliminar la reserva', error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al eliminar la reserva'
        })
    }
}

module.exports = ctrlReservas;