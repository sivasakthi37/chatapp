//const Register = require('../app/model');
const gentoken = require('../middleware/tokens')
const sendmail = require('../middleware/sendmail')
const userService = require('../services/user.Services');
exports.registration = (req, res) => {
    var responseResult = {};
    userService.registration(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult);
        }
        else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult)
        }
    }
    )
}
exports.login = (req, res) => {
    try {
        var responseResult = {};
        userService.login(req.body, (err, result) => {
            //console.log(req.body.email);

            if (err) {
                responseResult.success = false;
                responseResult.result = err;
                res.status(500).send(responseResult);
            }
            else {
                responseResult.sucess = true;
                responseResult.result = result;
                console.log("login working fine");
                console.log("result", result, responseResult);
                res.status(200).send(responseResult);
            }
        })
    } catch (error) {
        res.send(error);
    }
}
exports.finduser = (req, res) => {
    var respondresult = {};

    userService.checkuser(req.body, (err, result) => {

        if (err) {
            respondresult.success = false;
            respondresult.result = err;
            res.status(500).send(respondresult);
        }
        else {
            //  console.log("result is true : " + result);
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

    userService.setpass(req, (err, result) => {


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
exports.getuser = (req, res) => {
    var responce = {}

    userService.getusers(req, (err, data) => {

        if (err) {

            console.log("err in controller");
            responce.sucess = false;
            responce.result = err;
            res.status(500).send(err);
        }
        else {
            console.log(" controller working fine.. ");
            responce.success = true;
            responce.result = data;
            res.status(200).send(data);

        }


    })





}