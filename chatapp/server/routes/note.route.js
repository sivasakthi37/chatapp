module .exports=(app)=>{

    const notes=require('../controllers/note.controller');


    app.post('/Register',notes.create);


   // app.get('Login',notes.findOne);

}