var Ship = require('./shipModel')
var Log = require('../log/logModel')
var CommentModel = require('../comments/commentModel')
var router = require('express').Router()

/// get all
router.get('/api/ships/', function (req, res, next) {
    Ship.find({})
        .then(ships => {
            res.send(ships)
        })
        .catch(next)
})

////get one
router.get('/api/ships/:id', (req, res, next) => {
    Ship.findById(req.params.id)
        .then(ship => {
            res.send(ship)
        })
        .catch(next)
})

///Create one
router.post('/api/ships', (req, res, next) => {
    Ship.create(req.body)
        .then(ship => {

            res.send({ message: "succesfully posted ship", data: ship })
        })
        .catch(next)
})

///retrieve all logs
router.get('/api/ships/:shipId/logs', (req, res, next) => {
    Log.find({ shipId: req.params.shipId })
        .then(logs => {
            res.send(logs)
        })
        .catch(next)
})

///retrieve one log
router.get('/api/ships/:shipId/logs/:logId', (req, res, next) => {
    console.log(req.params.logId, req.params.shipId)
    Log.find({ _id: req.params.logId, shipId: req.params.shipId })
        .then(log => {
            res.send(log)
        })
        .catch(next)
})

////retrieve all comments
router.get('/api/ships/:shipId/comments', (req, res, next) => {
    CommentModel.find({ shipId: req.params.shipId })
        .then(logs => {
            res.send(logs)
        })
        .catch(next)
})

///retrieve one comment
router.get('/api/ship/:shipId/comments/:commentId', (req, res, next) => {
    CommentModel.find({ _id: req.params.commentId, shipId: req.params.shipId })
        .then(log => {
            res.send(log)
        })
        .catch(next)
})

//update one ship
router.put('/api/ships/:id', (req, res, next) => {
    Ship.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(ship => {
            res.send({ message: "authenticated ship transfer", data: ship })
        })
        .catch(next)
})

///delete one ship
router.delete('/api/ships/:id', (req, res, next) => {
    Ship.findByIdAndRemove(req.params.id)
        .then(ship => {
            res.send({ message: "successfully deleted ship" })
        })
        .catch(next)
})

module.exports = { router }
