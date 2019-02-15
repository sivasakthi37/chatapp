const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let saltRounds = 10;
//const RegisterSchema=mongoose.Schema({
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
    // title:String,
    // content:String,
},
    {
        timestamps: true
    });
function userModel() { }
var user = mongoose.model('user', UserSchema);
function hash(password) {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}
userModel.prototype.registration = (body, callback) => {

    user.find({ "email": body.email }, (err, data) => {
        console.log("data.length " + data);
        if (err) {
            console.log("Error in registration");
            callback(err);
        }
        else if (data.length > 0) {
            console.log("data.length " + data);

            console.log("Email already exists ");
            callback("User already Present");

        }
        else {
            const newUser = new user({
                "firstname": body.firstname,
                "lastname": body.lastname,
                "email": body.email,
                "password": hash(body.password)

            });
            newUser.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    callback(err);

                } else {
                    console.log("Register Sucessfully");
                    callback(null, result);
                }

            })
        }
    });
}
userModel.prototype.login = (body, callback) => {
    user.findOne({ "email": body.email }, (err, data) => {
        // console.log(data);
        if (err) {
            callback(err);
        } else if (data != null) {


            bcrypt.compare(body.password, data.password).then(function (res) {
                if (res) {
                    // console.log("responce in user model ",res);
                    // console.log("data in model",data);
                    console.log("login succesfully");
                    callback(null, res);
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
userModel.prototype.checkvalid = (body, callback) => {

    user.findOne({ "email": body.email }, (err, data) => {

        // console.log("data:",data);
        if (err) {
            console.log("error");

            callback(err);
        }
        else {
            callback(null, data);
        }
    })

}

userModel.prototype.updatepassword = (res, callback) => {

    console.log("IN MODELS :", res.body.data);
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
userModel.prototype.getuser = (res, callback) => {
  //  user.find({ "email": body.email }, (err, data) 
    user.find({}, (err, result) => {
        if (err) {
            console.log("users details in database");

            console.log("error in models");
            callback(err);

        }
        else {
            console.log("geting sucess in model");
            callback(null, result)


        }



    })

}
module.exports = new userModel();
//module.exports = mongoose.model('Register',RegisterSchema);
