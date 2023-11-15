const { TravelPlan } = require("../models/travel.model");


module.exports = {
    create: (req, res) => {
        console.log('create route', req.body)
        TravelPlan.create(req.body)
            .then(created => res.json(created))
            .catch(err => console.log('create user error', err))
    },

    findUsersTrip: (req, res) => {


        TravelPlan.find({ $or: [{ userID: req.params.id }, { usersJoining: { $eq: req.params.id } }] })
            .then(trip => res.json({ results: trip }))
            .catch(err => res.json({ error: err }))
    },

    findOtherUsersTrip: (req, res) => {
        TravelPlan.find()
            .where("userID")
            .ne(req.params.id)
            .where('usersJoining')
            .ne(req.params.id)
            .exec()
            .then(trip => res.json({ results: trip }))
            .catch(err => res.json({ error: err }))

    },

    findTrip: (req, res) => {
        TravelPlan.findById(req.params.trip)
            .populate('usersJoining')
            .exec()
            .then(trip => res.json(trip))
            .catch(err => console.log(err))
    },

    joinTrip: (req, res) => {
        TravelPlan.findByIdAndUpdate(req.body.tripID, { $push: { "usersJoining": req.body.id } }, { new: true })
            .then(updated => res.json(updated))
            .catch(err => console.log(err))
    },

    deleteYourTrips: (req, res) => {
        console.log('delete trip', req.body)

        TravelPlan.findByIdAndUpdate(req.body.tripID, { $pull: { 'usersJoining': req.body.userID } }, { new: true })
            .then(updated => res.json(updated))
            .catch(err => console.log('update trip error', err))


    }




}