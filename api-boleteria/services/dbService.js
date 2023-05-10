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
        eventsTable: 'eventos',
        sponsorsTable: 'patrocinadores'
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
        },

        updateUser: (id, {nombre, apellidos, pasHash, email, telefono, fechaNac, imagen, patrocinador}) => {
            return knex(tables.usersTable)
                .where({ID_Usuario: id})
                .update({
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

        detailUser: (id) => {
            return knex(tables.usersTable)
                .where({ID_Usuario: id})
                .select();
        },

        login: ({email,password}) => {
            return knex(tables.usersTable)
            .where({Email: email, PasHash:password})
            .select('ID_Usuario').count();
        }

        
    }

    const Events = {
        getEvents: () => {
            return knex(tables.eventsTable).select();
        },

        addEvent: ({nombre, tipo, idPatrocinador, locacion, fecha, edadMin, descripcion, imagenes}) => {
            return knex(tables.eventsTable).insert({
                Nombre: nombre,
                Tipo: tipo,
                ID_Patrocinador: idPatrocinador,
                Locacion: locacion,
                Fecha_Evento: fecha,
                Edad_Min: edadMin,
                Descripcion: descripcion,
                Imagenes: imagenes
            })
        },

        updateEvent: (id, {nombre, tipo, idPatrocinador, locacion, fecha, edadMin, descripcion, imagenes}) => {
            return knex(tables.eventsTable)
                .where({ID_Evento: id})
                .update({
                    Nombre: nombre,
                    Tipo: tipo,
                    ID_Patrocinador: idPatrocinador,
                    Locacion: locacion,
                    Fecha_Evento: fecha,
                    Edad_Min: edadMin,
                    Descripcion: descripcion,
                    Imagenes: imagenes
                });
        },

        detailEvent: (id) => {
            return knex(tables.eventsTable)
                .where({ID_Evento: id})
                .select();
        }
    }

    const Sponsors = {
        getSponsors: () => {
            return knex(tables.sponsorsTable).select()
        },

        addSponsor: ({idUsuario, cedula, ubicacion}) => {
            return knex(tables.sponsorsTable).insert({
                ID_us: idUsuario,
                Cedula: cedula,
                Ubicacion: ubicacion
            });
        },

        updateSponsor: (id, {idUsuario, cedula, ubicacion}) => {
            return knex(tables.sponsorsTable)
                .where({ID_Patrocinador: id})
                .update({
                    ID_us: idUsuario,
                    Cedula: cedula,
                    Ubicacion: ubicacion
                })
        },

        detailSponsor: (id) => {
            return knex(tables.sponsorsTable)
                .where({ID_Patrocinador: id})
                .select()
        },

        eventsSponsor: (id) => {
            return knex.select(
                'eventos.ID_Evento',
                'eventos.Nombre',
                'eventos.Tipo',
                'eventos.ID_Patrocinador',
                'eventos.Locacion',
                'eventos.Fecha_Evento',
                'eventos.Edad_Min',
                'eventos.Descripcion',
                'eventos.Imagenes'
            )
            .from(tables.eventsTable)
            .join(tables.sponsorsTable, 'eventos.ID_Patrocinador', 'patrocinadores.ID_Patrocinador')
            .where('patrocinadores.ID_Us', id)
        }
    }


    return{
        Users, 
        Events, 
        Sponsors
    }
}

module.exports = {
    dbService
}