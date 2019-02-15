const userModel = require('../app/chatModels');


exports.chatservice = (req, callback) => {

    //console.log("reqest in services ",req);

    userModel.chatsave(req, (err, result) => {
        if (err) {
            console.log("service error ");
            callback(err)
        }
        else {
            console.log("services come true");
            callback(null, result);

        }
    })
}
exports.getallchat = (req, callback) => {

    userModel.getdata(req, (err, result) => {
        if (err) {

            console.log("chat servive is working fine ");
            callback(err);
        }
        else {
            console.log("chat services is working fine");
            callback(null, result);
        }
    })
}