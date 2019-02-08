const Register = require('../app/model');

exports.create = (req, res) => {
    if (!req.body.firstname) {
        return res.status(400).send({
            message: "Empty note cannot be created ",
        });
    }
    const register = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,

        // title: req.body.title,
        // content: req.body.content
    });
    register.save()
        .then(data => {
            res.send(data);
        }).catch(err => {

            res.status(500).send({

                message: err.message

            });

        });


};

// exports.findOne = (req, res) => {



// };
