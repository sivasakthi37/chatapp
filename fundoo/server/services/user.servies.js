
const usermodels = require('../app/userModel');
exports.loginusers = (req, res) => {

    usermodels.login(req, (err, data) => {

        if (err) {
            console.log("err in service..");

            res(err);
        }
        else {
            console.log("service is working fine");
            res(null,data);
        }

    })

}

exports.registers=(req,res)=>{

    usermodels.registration(req,(err,data)=>{

        if(err){
            console.log("err in service..");

            res(err);

        }
        else{

            console.log("service is working fine");
            res(null,data);

        }



    })


}
exports.checkuser = (data, callback) => {
    usermodels.checkvalid(data, (err, result) => {

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

    usermodels.updatepassword(data, (err, result) => {

        if (err) {

            console.log("service error");
            callback(err);

        }
        else {

            callback(null, result);
        }

    })
}