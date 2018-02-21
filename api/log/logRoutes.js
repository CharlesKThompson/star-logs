var Log = require('./logModel')
var CommentModel = require('../comments/commentModel')

var router = require('express').Router()

router.get('/api/logs/', function (req, res, next) {
    Log.find({})
        .then(logs => {
            res.send(logs)
        })
        .catch(next)
})

////get one
router.get('/api/logs/:id', (req, res, next) => {
    Log.findById(req.params.id).then(log => {
        res.send(log)
    })
        .catch(next)
})

router.post('/api/ships/:shipId/logs', (req, res, next) => {
    var logObj = {
        title: req.body.title,
        shipId: req.params.shipId

    }
    Log.create(logObj)
        .then(log => {
            res.send({ message: "succesfully posted log", data: log })
        })
        .catch(next)
})

router.delete('/api/logs/:id', (req, res, next) => {
    Log.findByIdAndRemove(req.params.id)
        .then(log => {
            res.send({ message: "successfully deleted log" })
        })
        .catch(next)
})

router.get('api/logs/:logId/logs', (req, res, next) => {
    CommentModel.find({ logId: req.params.logId })
        .then(comments => {
            res.send(comments)
        })
        .catch(next)
})

router.get('api/logs/:logId/comments/:commentId', (req, res, next) => {
    CommentModel.find({ _id: req.params.commentId, logId: req.params.logId })
        .then(comment => {
            res.send(comment)
        })
        .catch(next)
})

module.exports = { router }
