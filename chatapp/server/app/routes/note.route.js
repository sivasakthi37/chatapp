module .exports=(app)=>{

    const notes=require('../controllers/note.controller.js');


    app.post('/notes',notes.create);


    app.get('notes/:noteId',notes.findOne);

}