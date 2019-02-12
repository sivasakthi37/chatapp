var jwt = require('jsonwebtoken');


exports.checkToken = (req,res,next) => {
   // console.log("request of authorization ",req.headers);
    
    var token1 = req.headers['token']; 
   console.log("check token enter sucessfully" ,token1);
    
    // decode token
    if (token1)
    {
        // verifies secret and checks exp
        jwt.verify(token1, 'secretkey', (err, decoded) => 
        {
            if (err) 
            {
                return res.send({
                    success: false,
                    message: 'Token is not valid'
                });
            } 
            else 
            {
                req.decoded = decoded;
                console.log("your token is valid",);
                
                next();
            }
        });
    } 
    else 
    {
        // if there is no token return an error
        return res.send({
            success: false,
            message: 'No token provided.'
        });
    }
}