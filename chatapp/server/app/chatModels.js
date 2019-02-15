const mongoose = require('mongoose');
const chatSchema = mongoose.Schema({
    sender: {
        type: String, require: [true, "sender require"]
    },
    reciver: {
        type: String, require: [true, "reciver require"]
    },
    message: {
        type: String, require: [true, "message require"]
    },

})
function chatmodel() { }
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

            callback(null, result);
        }

    })


}
chatmodel.prototype.getdata = (req, callback) => {

    chatuser.find({}, (err, data) => {

        if (err) {
            console.log("error in chat models");
            callback(err);
        }
        else {
            console.log("chat mode get data sucessfully");
            callback(null, data);
        }
    })
}
module.exports = new chatmodel();





