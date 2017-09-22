var mongoose = require('mongoose')
var Team = mongoose.model('Team')

module.exports = {
    create: function(req, res) {
        var team = new Team()
        team.name = req.body.name,
        team.position = req.body.position
        team.save(function(err){
            console.log(err)
        })
    },
    show: function(req, res) {
        Team.find({}, function(err, user) {
            res.json(user);
        })
    },
    delete: function(req, res) {
        Team.remove({_id: req.body.id}, function(err){
            console.log(err)
        })
    }
}