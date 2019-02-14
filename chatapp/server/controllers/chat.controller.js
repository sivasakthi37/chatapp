var chatservices = require('../services/chat.services')

exports.chatmessage = (req, res) => {

    console.log("request in request ", req);
    chatservices.chatservice(req, (err, data) => {

        if (err) {
            console.log("error in controllers");

            res(err);
        }
        else {
            console.log("controller workin fine");

            res(null, data);

        }
    })
}
exports.allchats = (req, res) => {

    chatservices.getallchat(req, (err, data) => {
        var responce = {};
        if (err) {

            console.log("error in  controllers");
            responce.sucess = false;
            responce.result = err;
            res.status(500).send(responce);

        }
        else {
            console.log("controller working fine");
            responce.sucess = true;
            responce.result = data;
            res.status(200).send(responce);
        }



    })

}