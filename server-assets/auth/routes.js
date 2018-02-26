var router = require('express').Router()
var Users = require('../api/user/user')
var errorMessage = {error: 'Invalid Auth'}


router.post('/auth/register', (req, res) => {

    req.body.password = Users.generatHash(req.body.password)

    Users.create(req.body)
        .then(user => {
            if (!user) {
                return res.status(401).send({errorMessage});
            }
            user.password = null;
            delete user.password;
            res.send(user);
        })
        .catch(err => res.status(401).send({errorMessage }));
});

router.post('/auth/login', (req, res) => {
    req.body.password
    Users.findOne({email: req.body.email}).then(user => {
        if(!user){
            return res.status(401).send({errorMessage});
        }

        if(user.validatePassword(req.body.password)){
           return res.status(401).send(errorMessage)
        }
        user.password = null;
        delete user.password;
        res.send(user);
    })
})



module.exports = router;