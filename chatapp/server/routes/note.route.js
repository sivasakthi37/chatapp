module.exports = (app) => {

    const notes = require('../controllers/note.controller');
    const Middleware = require('../middleware/authontication');
    // app.post('/Register',notes.create);
    const chatmessage = require('../controllers/chat.controller');
    app.post('/Register', notes.registration);

    app.post('/Login', notes.login);
    app.post('/forgetpassword', notes.finduser);
    app.post('/reset/:token', Middleware.checkToken, notes.setPassword);
    app.get('/getallusers', notes.getuser);
    app.get('/getallMessage', chatmessage.allchats)

}