const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String, require: [true, "firstname require"]
    },
    lastname: {
        type: String, require: [true, "lastname require"]
    },
    email: {
        type: String, require: [true, "email require"]
    },
    password: {
        type: String, require: [true, "password require"]
    }
});
function usermodel() { }
const user = mongoose.model('user', UserSchema);

function hash(Password) {
    let hash = bcrypt.hashSync(Password, 10);

    return hash;
}
usermodel.prototype.registration = (req, res) => {
    //console.log("in models req data=====>", req);

    user.find({ "email": req.body.email }, (err, data) => {
        console.log("register data in user models");

        if (err) {
            console.log("err  in register models ");
            res(err);
        }
        else if (data.length > 0) {
            console.log("Email id already exist");
            res("user already present");
        }
        else {
            const userdata = new user({
                "firstname": req.body.firstname,
                "lastname": req.body.lastname,
                "email": req.body.email,
                "password": hash(req.body.password)

            })
            userdata.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    res(err);

                } else {
                    console.log("Register Sucessfully");
                    res(null, result);
                }

            })

        }
    })
}
usermodel.prototype.login = (req, callback) => {
    console.log("request in user models => ", req.body);

    user.findOne({ "email": req.body.email }, (err, data) => {
        if (err) {
            callback(err);
        } else if (data != null) {

            bcrypt.compare(req.body.password, data.password).then(function (res) {
                if (res) {
                    // console.log("responce in user model ",res);
                    // console.log("data in model",data);
                    console.log("login succesfully");
                    console.log("login data in models=>", data);

                    callback(null, data);
                } else {
                    console.log("Incorrect password");
                    callback("Incorrect password");
                }
            });
        } else {
            console.log("Invalid user");
            callback("invalid user");
        }
    })

}

usermodel.prototype.checkvalid = (body, callback) => {
 //   console.log("body in models==>", body);

    user.find({ "email": body.email }, (err, data) => {

         console.log("data:===>",data);
        if (err) {
            console.log("error");

            callback(err);
        }
        else {
            callback(null, data);
        }
    })

}
usermodel.prototype.updatepassword = (res, callback) => {

    console.log("IN MODELS :", res.body);
    console.log("IN MODEL DECODE :", res.decoded);


    var password = hash(res.body.data);
    user.updateOne({ _id: res.decoded.payload.user_id }, { password: password }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    });
}

module.exports = new usermodel;