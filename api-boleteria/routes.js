module.exports = function(app, dbService){
    app.get('/api', (req, res) => {
        res.status(200).json;
        res.send("node js api");
    });

    //Users routes
    app.get('/api/users', (req, res) => {
        dbService.Users.getUsers().then(result => {
            res.json(result)
        }).catch(e => {
            res.status(500).json(e);
        });
    });

    app.get('/api/users/:id', (req, res) => {
        dbService.Users.detailUser(req.params.id).then(result => {
            res.json(result);
        }).catch(e => {
            res.status(500).json(e);
        })
    })

    app.post('/api/users', (req, res) => {
        const user = req.body;
        dbService.Users.addUser(user).then(() => {
            res.send("user added")
            console.log(user)
        }).catch(e => {
            //res.status(500).json(e);
            console.log(e)
        });
    });

    app.post('/api/users/login', (req, res) => {
        const user = req.body;
        dbService.Users.login(user).then((result) => {
            res.send(result);
        }).catch(e => {
            res.status(500).json(e);
            console.log(e);
        });
    });

    app.put('/api/users/:id', (req, res) => {
        const user = req.body;
        dbService.Users.updateUser(req.params.id, user).then(() => {
            res.send(`user ${req.params.id} updated`);
        }).catch(e => {
            res.status(500).json(e);
            console.log(e);
        })
    })

    //Events routes
    app.get('/api/events', (req, res) => {
        dbService.Events.getEvents().then(result => {
            res.json(result)
        }).catch(e => {
            res.status(500).json(e);
        });
    });

    app.get('/api/events/:id', (req, res) => {
        const id = req.params.id
        dbService.Events.detailsEvent(id).then(result => {
            res.json(result);
        }).catch(e => {
            res.status(500).json(e);
        });
    })

    app.post('/api/events', (req, res) => {
        const user = req.body;
        dbService.Events.addEvent(user).then(() => {
            res.json(user);
        }).catch(e => {
            res.status(500).json(e);
        })
    });

    app.put('/api/events/:id', (req, res) => {
        const user = req.body;
        dbService.Events.updateEvent(req.params.id, req.body).then
    })
}