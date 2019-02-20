var userservices = require('../services/user.servies');
var gentoken = require('../middleware/tokens');
const sendmail = require('../middleware/sendmail')
exports.login = (req, res) => {

    var responce = {}
    userservices.loginusers(req, (err, result) => {

        if (err) {

            responce.sucess = false;
            responce.result = err;
            res.status(500).send(responce);

        }
        else {
            console.log("controler responce ", result);

            const payload = {
                user_id: result._id
            }
            //  console.log(payload);
            const obj = gentoken.GenerateToken(payload);


            responce.sucess = true;
            responce.result = result;
            responce.token = obj;
            res.status(200).send(responce);

        }
    })
}
exports.register = (req, res) => {
    var responcedata = {}
    console.log("req in controller===>", req.body);

    userservices.registers(req, (err, result) => {

        if (err) {
            responcedata.sucess = false;
            responcedata.result = err;
            res.status(500).send(responcedata);
        }
        else {
            responcedata.sucess = true;
            responcedata.result = result;


            res.status(200).send(responcedata);

        }


    })


}
exports.finduser = (req, res) => {
    var respondresult = {};
//console.log("request in controller-------->",req);

    userservices.checkuser(req.body, (err, result) => {

        if (err) {
            respondresult.success = false;
            respondresult.result = err;
            res.status(500).send(respondresult);
        }
        else {
             console.log("result is true : " + result);
            respondresult.success = true;
            respondresult.result = result;

            const payload = {
                user_id: respondresult.result._id
            }
            //  console.log(payload);
            const obj = gentoken.GenerateToken(payload);
            const url = `http://localhost:3000/reset/${obj.token}`;

            sendmail.sendEMailFunction(url);
            //Send email using this token generated
            res.status(200).send(url);
        }
    })
}
exports.setPassword = (req, res) => {
    var Responce = {};
    //console.log("controller  ",req.decoded);
    //console.log();

    userservices.setpass(req, (err, result) => {


        if (err) {
            Responce.success = false;
            Responce.result = err;
            res.status(500).send(Responce);
        }
        else {
            Responce.success = true;
            Responce.result = result;
            res.status(200).send(Responce);
        }
    })
}