module.exports = function(app, dbService){
    app.get('/api', (req, res) => {
        res.status(200).json;
        res.send("node js api");
    });

    app.get('/api/users', (req, res) => {
        dbService.Users.getUsers().then(result => {
            res.json(result)
        }).catch(e => {
            res.status(500).json(e);
        });
    });

    app.post('/api/users', (req, res) => {
        const user = req.body;
        dbService.Users.addUser(user).then(() => {
            res.send("user added")
            console.log(user)
        }).catch(e => {
            res.status(500).json(e);
        });
    });

    app.get('/api/events', (req, res) => {
        dbService.Events.getEvents().then(result => {
            res.json(result)
        }).catch(e => {
            res.status(500).json(e)
        })
    });

    app.post('/api/events', (req, res) => {

    })
}