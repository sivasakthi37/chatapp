//const Register = require('../app/model');
const userService = require('../services/user.Services');
// exports.create = (req, res) => {
//     if (!req.body.firstname) {
//         return res.status(400).send({
//             message: "Empty note cannot be created ",
//         });
//     }
//     const register = new Register({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         password: req.body.password,

//         // title: req.body.title,
//         // content: req.body.content
//     });
//     register.save()
//         .then(data => {
//             res.send(data);
//         }).catch(err => {

//             res.status(500).send({

//                 message: err.message

//             });

//         });


// };

// exports.findOne = (req, res) => {



// };
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
    console.log(req.body.email);
    
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

