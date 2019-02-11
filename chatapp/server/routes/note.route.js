module .exports=(app)=>{

    const notes=require('../controllers/note.controller');

   // app.post('/Register',notes.create);
   app.post('/Register',notes.registration);

    app.post('/Login',notes.login);
    app.post('/forgetpassword',notes.finduser);
    

}