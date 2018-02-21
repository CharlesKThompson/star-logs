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

router.post('/api/comments', (req, res, next) => {
    CommentModel.create(req.body)
        .then(comment => {
            res.send({ message: "succesfully posted comment", data: comment })
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
