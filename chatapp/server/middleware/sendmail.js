const nodemailer=require('nodemailer');

exports.sendEMailFunction = (url,) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'sivachandrasekaran37@gmail.com',
            pass:''
        },
    });
    const mailOptions = {
        from:'sivachandrasekaran37@gmail.com',       
        to: 'sivachandrasekaran37@gmail.com',   
        subject: 'To send mail throw node',      
        text: 'Your Email verifaction link is:\n\n'+url 
    };
    transporter.sendMail(mailOptions,(err,info) => {
       
        if (err){
        console.log("is it is invalid");
        
            console.log("error on sending mail--", err)
        }
        else
            console.log('result of sending mail-- ');
    });
    
}
