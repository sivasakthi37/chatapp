const Note = require('../model.js');

exports.create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "empty note cannot be created ",
        });
    }
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    });
    note.save()
        .then(data => {
            res.send(data);
        }).catch(err => {

            res.status(500).send({

                message: err.message

            });

        });


};

exports.findOne = (req, res) => {



};
