var name = require('../controllers/team.js')
var path = require("path")

module.exports = function(app){
    app.get('/players/add', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, "./../../TeamAngular/dist/index.html"))
    })
    app.post('/players/addPlayer', function (req, res) {
        name.create(req,res)
    })
    app.get('/showPlayers', function(req, res){
        name.show(req, res)
    }) 
    app.post('/deletePlayer', function(req, res){
        name.delete(req, res)
    })
    app.get('/status/game/:id', (req,res,next) => {
        res.sendFile(path.resolve(__dirname, "./../../TeamAngular/dist/index.html"))
    })
}