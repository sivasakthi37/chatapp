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
