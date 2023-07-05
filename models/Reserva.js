// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require('../database');

const Reserva = sequelize.define('Reserva', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        defaultValue: new Date().getTime()
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_salida_vuelo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_actual: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    asiento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    origen: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    destino: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas'
});

// Se crea la tabla si es que no existe
//Reserva.sync({ force: false }).then(() => {
    //console.log('Tabla de Reservas creada');
//});

module.exports = Reserva;