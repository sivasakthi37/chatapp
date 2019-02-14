const mongoose = require('mongoose');
const chatSchema = mongoose.Schema({
    sender: {
        type: String, require: [true, "firstname require"]
    },
    reciver: {
        type: String, require: [true, "lastname require"]
    },
    message: {
        type: String, require: [true, "email require"]
    },

})
function chatmodel() {}
const chatuser = mongoose.model('chat', chatSchema);

chatmodel.prototype.chatsave = (req, callback) => {

    console.log("chat savve in models -->", req);

    const chatmsg = new chatuser({
        sender: req.sender,
        reciver: req.reciver,
        message: req.message,

    });
    chatmsg.save((err, result) => {
        if (err) {
            console.log("error when store data in database");
            callback(err)
        }
        else {

            callback(null,result);
        }

    })


}

module.exports = new chatmodel();





