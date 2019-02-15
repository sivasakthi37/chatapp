const userModel = require('../app/model');


exports.registration = (data, callback) => {
    userModel.registration(data, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        }
        else {
            console.log("In service", result);
            callback(null, result);
        }
    }
    )
}
exports.login = (data, callback) => {
    userModel.login(data, (err, result) => {

        if (err) {
            console.log("service error");
            callback(err);
        }
        else {
            callback(null, result);

        }
    })
}
exports.checkuser = (data, callback) => {
    userModel.checkvalid(data, (err, result) => {

        if (err) {
            console.log("service err");
            callback(err);
        }
        else {
            callback(null, result);
        }

    })
}
exports.setpass = (data, callback) => {
    //console.log("services ",data.body);

    userModel.updatepassword(data, (err, result) => {

        if (err) {

            console.log("service error");
            callback(err);

        }
        else {

            callback(null, result);
        }

    })
}
exports.getusers = (req, res) => {

    userModel.getuser(req, (err, result) => {

        if (err) {
            console.log("service error");
            res(err);

        }
        else {
            console.log("service working");
            res(null,result);


        }


    })


}