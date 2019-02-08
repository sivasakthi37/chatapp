const mongoose=require('mongoose');

const RegisterSchema=mongoose.Schema({

firstname:String,
lastname:String,
email:String,
password:String,
// title:String,
// content:String,
},
{
timestamps:true

});
module.exports = mongoose.model('Register',RegisterSchema);
