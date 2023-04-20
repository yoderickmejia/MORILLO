
const dbService = () => {
    const knex = require('knex')({
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB
        }
    })

    const tables = {
        usersTable: 'usuarios',
        eventsTable: 'eventos'
    }

    const Users = {
        addUser: ({ nombre, apellidos, pasHash, email, telefono, fechaNac, imagen, patrocinador }) => {
            return knex(tables.usersTable).insert({
                Nombre: nombre,
                Apellidos: apellidos,
                PasHash: pasHash,
                Email: email,
                Telefono: telefono,
                Birth: fechaNac,
                Imagen: imagen,
                IsPatrocinador: patrocinador
            });
        },

        getUsers: () => {
            return knex(tables.usersTable).select();
        }
    }

    const Events = {
        getEvents: () => {
            return knex(tables.eventsTable).select();
        },

        addEvent: ({nombre, tipo, idPatrocinador, locacion, fecha, edadMin, descripcion, imagenes}) => {
            knex(tables.eventsTable).insert({
                Nombre: nombre,
                Tipo: tipo,
                ID_Patrocindor: idPatrocinador,
                Locacion: locacion,
                Fecha_Evento: fecha,
                Edad_Min: edadMin,
                Descripcion: descripcion,
                Imagenes: imagenes
            })
        }
    }

    return{
        Users, Events
    }
}

module.exports = {
    dbService
}