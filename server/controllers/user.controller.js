const { User } = require("../models/travel.model");


module.exports = {

    create: (req, res) => {
  

        User.findOne({ username: req.body.username })
            .then(found => {
                if (found) {
                    res.json({ error: true })
                } else {
                    User.create(req.body)
                        .then(created => res.json(created))
                        .catch(err => console.log('create user error', err))
                }
            })
            .catch(err => console.log('find user error', err))


    },
    findUser: (req, res) => {
       

        User.findOne({ username: req.params.username, password: req.params.password })
            .then(found => {
                if (found) {
                    res.json({ found })
                } else {
                    res.json({ found: false })
                }
            })
            .catch(err => console.log('find user error', err))


    },

    getUser: (req, res) => {

        User.findById(req.params.id)
            .then(found => res.json(found))
            .catch(err => console.log('get user error', err))
    }

}