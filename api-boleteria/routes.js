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

    app.post('/api/login', (req, res) => {
        const user = req.body;
        dbService.Users.login(user).then(result => {
            res.send(result)
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
            res.send(result);
        }).catch(e => {
            res.status(500).json(e)
            console.log(e)
        })
    })

    app.get('/api/events/:id', (req, res) => {
        dbService.Events.detailEvent(req.params.id).then((result) => {
            res.send(result)
        }).catch(e => {
            res.status(500).json(e);
            console.log(e)
        })
    })

    app.post('/api/add-event', (req, res) => {
        const user = req.body;
        dbService.Events.addEvent(user).then(() => {
            res.json(user);
        }).catch(e => {
            res.status(500).json(e);
        })
    });

    app.put('/api/events/:id', (req, res) => {
        const user = req.body;
        dbService.Events.updateEvent(req.params.id, req.body).then(() => {
            res.send("User updated");
        }).catch(e => {
            res.status(500).json(e);
        })
    })

    //sponsors routes
    app.get('/api/sponsor', (req, res) => {
        dbService.Sponsors.getSponsors().then(result => {
            res.json(result)
        }).catch(e => {
            res.status(500).json(e);
        });
    });

    app.get('/api/sponsor/:id', (req, res) => {
        const id = req.params.id
        dbService.Sponsors.detailSponsor(id).then(result => {
            res.json(result);
        }).catch(e => {
            res.status(500).json(e);
        });
    })

    app.post('/api/sponsor', (req, res) => {
        const user = req.body;
        console.log(user)
        dbService.Sponsors.addSponsor(user).then(() => {
            res.json(user);
        }).catch(e => {
            res.status(500).json(e);
        })
    });

    app.get('/api/sponsor/:id/events', (req, res) => {
        const id = req.params.id;
        dbService.Sponsors.eventsSponsor(id).then((result) => {
            res.json(result);
        }).catch(e => {
            res.status(500).json(e);
        })
    })

    /*---------------------------------Images-------------------------------------------*/

    app.get('/api/images', (req, res) => {
        
    })
}