var CommentModel = require('./commentModel')

var router = require('express').Router()

router.get('/api/comments/', function (req, res, next) {
    CommentModel.find({})
        .then(comments => {
            res.send(comments)
        })
        .catch(next)
})

////get one
router.get('/api/comments/:id', (req, res, next) => {
    CommentModel.findById(req.params.id).then(comment => {
        res.send(comment)
    })
        .catch(next)
})

router.post('/api/ships/:shipId/logs/:logId/comments', (req, res, next) => {
    var commentObj = {
        author: req.body.author,
        topic: req.body.topic,
        text: req.body.text,
        logId: req.params.logId,
        shipId: req.params.shipId

    }
    CommentModel.create(commentObj)
        .then(comment => {
            res.send({ message: "succesfully posted comment", data: comment })
        })
        .catch(next)
})

router.put('/api/comments/:id', (req, res, next) => {
    CommentModel.findByIdAndUpdate(req.params.id, req.body)
        .then(comment => {
            res.send({ message: "update authenticated!,", data: comment })
        })
        .catch(next)
})

router.delete('/api/comments/:id', (req, res, next) => {
    CommentModel.findByIdAndRemove(req.params.id)
        .then(comment => {
            res.send({ message: "successfully deleted comment" })
        })
        .catch(next)
})

module.exports = { router }
